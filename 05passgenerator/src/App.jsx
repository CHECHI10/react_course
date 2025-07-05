import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passGenerator = useCallback(()=> {
    let pass = '';
    let str = 'ABCDEFGFIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()-_=+`~';

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length )
      
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword])

  const passwordRef = useRef(null);

  const copyPassToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);

    window.navigator.clipboard.writeText(password)
    .then(()=> {
      console.log('pass copied! ',password )
    })
    .catch((err)=> {
      console.error('failed to copy', err)
    }, [password])

  }, [password])

  useEffect(() => {
    passGenerator();
  }, [length, numAllowed, charAllowed, passGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-3xl text-center text-white py-5 my-5'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={()=> {copyPassToClipboard()}}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 transition-all duration-100 active:bg-blue-500 '>
            copy
          </button>
          
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 my-5'>
            <input 
              type='range'
              min={6}
              max={25}
              value={length}
              className='cursor-pointer'
              onChange={(e)=> {setLength(e.target.value)}}
            />
            <label>length: {length}</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={()=> {
                setNumAllowed((prev)=> !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>   
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked={charAllowed}
              id='charInput'
              onChange={()=> {
                setCharAllowed((prev)=> !prev)
              }}
            />
            <label htmlFor="charInput">Characters</label>   
          </div>
        </div>
      </div>
    </>
  )
}

export default App
