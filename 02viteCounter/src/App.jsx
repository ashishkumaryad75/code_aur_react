import { useState } from "react"

function App() {
  const [counter , setCounter] = useState(0);

  function increment(){
    setCounter(counter+1);
  };

  function decrement(){
    if(counter <= 0){
      return;
    }
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Counter value will be : {counter}</h1>
      <br />
      <button type="button" onClick={increment}>Increment</button>
      <br />
      <br />
      <button type="button" onClick={decrement} disabled={!counter}>Decrement</button>
    </>
  )
}

export default App
