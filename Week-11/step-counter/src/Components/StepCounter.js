import { increment,reset } from "../Actions/countAction"
import { useDispatch,useSelector } from "react-redux"

export default function StepCounter(){

    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <header>
            You've walked {count} steps today!
            </header>
            <div>
                <button className='addBtn' onClick={() => dispatch(increment())}>Add a Step</button>
                <br/>
                <button className='resetBtn' onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </>
    )
}