import { useState } from "react"

function App() {
  const [counter , setCounter] = useState(0);

  // function increment(){
  // // it will not increase counter + 6 due to taking the whole value as a bunch and update them.
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  // };
  
  function increment(){ 
    // it will increase counter + 5 due to taking value from previous itteration and update them.
    setCounter(preCounter=>preCounter+1);
    setCounter(preCounter=>preCounter+1);
    setCounter(preCounter=>preCounter+1);
    setCounter(preCounter=>preCounter+1);
    setCounter(preCounter=>preCounter+1);
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
