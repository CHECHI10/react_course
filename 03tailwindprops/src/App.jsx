import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'Rohit',
    age: 23
  }

  let myArr = [1,2,3,4];

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>tailwind test</h1>
    
      <Card username="Rohit" />
      <Card username="Chechi" num={2}/>
    </>
  )
}

export default App
