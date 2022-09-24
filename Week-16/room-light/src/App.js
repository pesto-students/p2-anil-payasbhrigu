import './App.css';
import { switchON,switchOFF } from "./Actions/countAction"
import { useDispatch,useSelector } from "react-redux";
import * as Sentry from "@sentry/react";

function App() {

  const light = useSelector((state)=>state.light)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className='room' style={ {backgroundColor: light === 0 ? 'black' : 'white'} }>
        <header style={ {color: light === 0 ? 'white' : 'black'} }>
          Room
        </header>
        <button onClick={() =>{
                                if(light === 1)
                                  dispatch(switchOFF())
                                else 
                                  throw Error("Error Raised")
                              }
                         }>Sentry Check</button>
      </div>
    </div>
  );
}

export default Sentry.withProfiler(App);
