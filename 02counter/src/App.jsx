import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 5;
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 10) {
      setCounter(counter + 1);
    }
    //console.log("Clicked", counter);
  }

  const removeValue = ()=> {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>

      <h1>learning react </h1>
      <h2>counter value: {counter}</h2>  

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      

    </>
  )
}

export default App
