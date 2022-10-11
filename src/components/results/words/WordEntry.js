import './WordEntry.css'
import {useState} from "react";
import ReactTooltip from "react-tooltip";
import Definition from "./Definition";

const WordEntry = (props) => {
    const [displayDef, setDisplayDef] = useState(false)
    return (
        <div>
            <div className="word" data-tip="definition" data-for="definition"
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
            {displayDef && (
                <ReactTooltip id="definition" type="error" event="click" eventOff="hover">
                    <Definition word={props.word.word} />
                </ReactTooltip>
            )}
        </div>
    )
}

export default WordEntry;