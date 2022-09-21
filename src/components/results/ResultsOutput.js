import './ResultsOutput.css'
import WordEntry from "./words/WordEntry";

const ResultsOutput = (props) => {

    return (
        <div>
            <p><b>Number of Words Found</b>: {props.results.totalWords}</p>
            <p><b>Total Boggle Score</b>: {props.results.totalScore}</p>
            {/*off by factor of 10?*/}
            {/*<p>Boggle API Search Time (ms): {props.results.totalTime}</p>*/}
            <p><b>Found Words:</b></p>
            <div className="word-list">
                {props.results.allWords.map((wordObject) => <WordEntry key={Math.random()} word={wordObject.word}/>)}
            </div>
        </div>
    )

}

export default ResultsOutput;