import { useState, useEffect } from "react";
import Home from "./Home";

const delay = 3

export default function TodoApp(){
    const [show, setShow] = useState(true)
    const [count, setCount] = useState(delay)
    
    useEffect(() => {
        let timer = setTimeout(() => {
        setShow(false)
        }, delay * 1000);

        return () => {
        clearTimeout(timer)
        }
    },[])

    useEffect(() => {
        let timer2 = setTimeout(() => {
        setCount(count-1)
        }, 1000);

        return () => {
        clearTimeout(timer2)
        }
    })

    return show ? (
    <div className="loading">
        Loading...{ count }
    </div>
    ) : <Home/>
}