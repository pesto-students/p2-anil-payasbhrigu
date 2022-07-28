import { createContext } from "react";
import { useState } from "react";

export const StepContext = createContext()

export const StepProvider = (props) => {

    const [steps,setSteps] = useState(0)

    return (
        <StepContext.Provider value={[steps,setSteps]}>
            {props.children}
        </StepContext.Provider>
    )

};