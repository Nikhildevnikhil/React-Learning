import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);
  // let counter = 0;
  const addValue = () => {
    // counter += 1;
    setCounter(counter+1);
    console.log("clicked",counter);
  }
  const removeValue = () => {
    setCounter(counter-1);
    console.log("clicked",counter);
  }
  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add{counter}</button>
      <br/>
      <button onClick={removeValue}>remove{counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
