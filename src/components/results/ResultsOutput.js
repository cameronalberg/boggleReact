import './ResultsOutput.css'
import WordEntry from "./words/WordEntry";

const ResultsOutput = (props) => {
    const pathHandler = (data) => {
        props.displayPath(data)
    }
    return (
        <div>
            <div className="results-header">
                <p><b>Number of Words Found</b>: {props.results.totalWords}</p>
                <p><b>Total Boggle Score</b>: {props.results.totalScore}</p>
                <p><b>Results</b> (hover for board location, click for word definition):</p>
            </div>
            <div className="word-list">
                {props.results.allWords.map((wordObject) => <WordEntry key={Math.random()} word={wordObject} path={pathHandler}/>)}
            </div>
        </div>
    )
}

export default ResultsOutput;