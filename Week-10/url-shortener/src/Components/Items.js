import {useEffect,useState,useRef} from "react";
import './Items.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Items(){

    const [item, setItem] = useState({original: "",shortened:""})
    const [items, setItems] = useState([])

    async function shortenURL(){
        if(item["original"] !== ""){
            const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${item["original"]}`)
            const response = await data.json()
            const result = {original:item["original"],shortened:response.result.full_short_link}
            setItems([...items,result])
            setItem({original:"",shortened:""})
        }
    }

    const deleteItem = (index) => {
        let elements = items.filter((note,ind) => {
            return index !== ind
        })
        setItems([...elements])
    }
    
    function Item(props) {
        return (
            <>
            <div className="item">
                <div className="originalURL">{props.item["original"]}</div>
                <div className="shortenedURL">
                    {props.item["shortened"]}
                    <CopyToClipboard text={props.item["shortened"]}>
                        <button className="copyBtn">Copy</button>
                    </CopyToClipboard>
                </div>
            </div>
            
            </>
        )
    }

    return (
        <>
            <div className="items">
                {
                    <div>
                    <input value={item["original"]} type="text" placeholder="Enter URL Here" name="item" onChange={(e) => setItem({original:e.target.value,shortened:""})}/>
                    <button className="shortenBtn" onClick={shortenURL}>Shorten</button>
                    </div>
                }
                {items.map((item,index) => {
                        return <Item item={item} id={`item_${index}`} onDelete={deleteItem} index={index}/>
                })}
            </div>
        </>
    )
}