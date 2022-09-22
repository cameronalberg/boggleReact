import './WordEntry.css'
import {useState} from "react";

const WordEntry = (props) => {
    const [displayDef, setDisplayDef] = useState(false)
    console.log("dictionary lookup in progress, currently set to " + displayDef)
    return (
        <div>
            <div className="word"
                 onMouseEnter={() => {
                     props.path(props.word.path);
                     setDisplayDef(true);
                    }}
                 onMouseLeave={() => {
                     props.path(false);
                     setDisplayDef(false);
                 }}>
                {props.word.word}
            </div>
            {/*{displayDef && (*/}
            {/*    <div>*/}
            {/*        I'll appear when you hover over the button.*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    )

}

export default WordEntry;