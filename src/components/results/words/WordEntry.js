import './WordEntry.css'
import {useState} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const WordEntry = (props) => {
    const [definition, setDefinition] = useState("")

    const getDefinition = () => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${props.word.word}`)
            .then((response) => {
                if(response.status !== 200){
                    setDefinition("not found.")
                } else {
                    return response.json()
                }
            })
            .then((data) => parseDefinition(data))
            .then((result) => setDefinition(result))
        return true
    }

    const parseDefinition = (data) => {
        if (data !== null) {
            try {
                const meanings = data[0].meanings
                let def = (meanings[0].definitions)[0].definition
                def = def.toString()
                return def
            } catch {
                return "not found."
            }
        }
        return "not found."
    }
    const renderTooltip = props => (
        <Tooltip className="tooltip" {...props}>{definition}</Tooltip>
    );
    return (
        <div>
            <OverlayTrigger  onEnter={getDefinition} placement="top" overlay={renderTooltip}>
                <div className="word" data-tip="definition" data-for="definition"
                     onMouseEnter={() => {
                         props.path(props.word.path);
                        }}
                     onMouseLeave={() => {
                         props.path(false);
                     }}>
                    {props.word.word}
                </div>
            </OverlayTrigger>
        </div>
    )
}

export default WordEntry;