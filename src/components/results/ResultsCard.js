import './ResultsCard.css'
import ResultsOutput from "./ResultsOutput";

const ResultsCard = (props) => {
    const pathHandler = (data) => {
        props.displayPath(data)
    }
    return (
        <div className="results-card">
            {props.results.length === 0 ? (
                <div>
                    <p>No Results Yet. </p>
                    <p>Click SOLVE to generate some!</p>
                </div>) : (
                <div>
                    <ResultsOutput results={props.results} displayPath={pathHandler}/>
                </div>
            )}
        </div>
    )

}

export default ResultsCard;