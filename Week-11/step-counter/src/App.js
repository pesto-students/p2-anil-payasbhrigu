import './App.css';
import StepCounter from './Components/StepCounter';
import { useState } from 'react';
import StepCounterContext from './StepCounter-Context';
import { StepProvider } from './StepContext';

function App() {

  const [toggle, setToggle] = useState("context")


  function onContextToggle(){
    if(toggle === "context")
      setToggle("nonContext")
    else
      setToggle("context")
  }

  return (
    <div className="App">
      <div className="container" style={ {backgroundImage: toggle === "context" ? "linear-gradient( rgba(217, 140, 31, 0.881), rgba(124, 125, 56, 0.71))" : ""} } >
        <button onClick={onContextToggle} className='contextToggle'>{toggle === "context" ? "Non Context" : "Use Context"}</button>
        {toggle === "context" ? <StepProvider> <StepCounterContext/> </StepProvider>  : <StepCounter/>}
      </div>
    </div>
  );

}

export default App;
