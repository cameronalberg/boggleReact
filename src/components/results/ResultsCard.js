import './ResultsCard.css'
import ResultsOutput from "./ResultsOutput";

const ResultsCard = (props) => {

    return (
        <div className="results-card">
            {props.results.length === 0 ? (
                <div>
                    <p>No Results Yet. </p>
                    <p>Click SOLVE to generate some!</p>
                </div>) : (
                <div>
                    <ResultsOutput results={props.results}/>
                </div>
            )}
        </div>
    )

}

export default ResultsCard;