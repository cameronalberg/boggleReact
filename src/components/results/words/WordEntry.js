import './WordEntry.css'

const WordEntry = (props) => {

    return (
        <div className="word">
            {props.word}
        </div>
    )

}

export default WordEntry;