import { useContext } from "react";
import { StepContext } from "./StepContext";

export default function StepCounter(){

    const [count,setCount] = useContext(StepContext)

    function handleStepReset() {
        setCount(0)
    }

    function handleAddStep() {
        setCount(count+1)
    }

    return (
        <>
            <header>
            You've walked {count} steps today!
            </header>
            <div>
                <button className='addBtn' onClick={handleAddStep}>Add a Step</button>
                <br/>
                <button className='resetBtn' onClick={handleStepReset}>Reset</button>
            </div>
        </>
    )
}