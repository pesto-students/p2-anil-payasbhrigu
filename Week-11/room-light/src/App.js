import './App.css';
import { switchON,switchOFF } from "./Actions/countAction"
import { useDispatch,useSelector } from "react-redux";

function App() {

  const light = useSelector((state)=>state.light)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className='room' style={ {backgroundColor: light === 0 ? 'black' : 'white'} }>
        <header style={ {color: light === 0 ? 'white' : 'black'} }>
          Room
        </header>
        <button onClick={() =>{light === 1 ? dispatch(switchOFF()) : dispatch(switchON()) }}>Flip</button>
      </div>
    </div>
  );
}

export default App;
