import { useState, useRef } from "react";
import './Home.css'
import Note from "./Components/Note";
import Header from "./Components/Header";

export default function Home(){

    const [note,setNote] = useState({
        description: "",
        done: false
    })
    const [notes,setNotes] = useState([])

    const addNote = () => {
        if(note['description'] !== "")
        {
            setNotes([...notes,note])
            setNote({description: "",done:false})
        }
    }

    const deleteNote = (index) => {
        let items = notes.filter((note,ind) => {
            return index !== ind
        })
        setNotes([...items])
    }

    return (
        <>
            <Header/>
            <div>
                <input value={note['description']} type="text" placeholder="Enter New Note Here" name="note" onChange={(e) => setNote({description: e.target.value, done:false})}/>
                <button onClick={addNote}>Add</button>
            </div>
            <div className="notes">
                {notes.map((note,index) => {
                    return <Note id={`note_${index}`} noteText={note['description']} onDelete={deleteNote} index={index}/>
                })}
            </div>

        </>
    );
}