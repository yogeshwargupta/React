import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 5;
  const addValue=()=>{
    console.log(counter);
    //counter += 1
    if(counter<20)
    setCounter(counter + 1)
  }

  const removeValue=()=>{
    console.log(counter);
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Dec value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
