import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Yoshi",
    age: 21
  }

let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black  p-4 rounded-xl'>Tailwind Test</h1>
     <Card channel="Ramrambhaisarane" btnText="Click me"/>
     <Card channel="Yoshi" btnText="Visit me"/>
    </>
  )
}

export default App
