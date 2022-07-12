import './Note.css'
import { useRef } from 'react'

export default function Note(props){

    const {id,noteText,onDelete,index} = props

    const checkRef = useRef(null)
    const noteRef = useRef(null)

    function handleCheck(){

        console.log(noteRef,checkRef)
        if(checkRef.current.checked)
            noteRef.current.style.textDecoration = "line-through";
        else
            noteRef.current.style.textDecoration = "initial";
    }

    return (
        <div ref={noteRef} id={id} className="note">
            <input id={`${id}_done`} type="checkbox" ref={checkRef} onChange={() => handleCheck()}/>
            <p>{noteText}</p>
            <button className="delete" onClick={() => {
                onDelete(index)
                }}></button>
        </div>
    );
}