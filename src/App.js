import './App.css';
import Title from "./components/Title";
import ResultsCard from "./components/results/ResultsCard";
import BoardCard from "./components/board/BoardCard";
import {useState} from "react";

function App() {
    const [currentDice, setCurrentDice] = useState("")
    const [results, setResults] = useState("")
    const currentDiceHandler = (dice) => {
      setCurrentDice(dice)
      console.log("app dice: " + dice)
    }
    const currentResultsHandler = (data) => {
        const resultsItem = {
            solvedBoard: data.board,
            totalWords: data.numWordsFound,
            totalScore: data.score,
            totalTime: data.time,
            allWords: data.words,
        }
        setResults(resultsItem)
        console.log("got results for solved board: " + resultsItem.solvedBoard)
    }
  return (
      <div className="App">
          <div className= "App-header">
            <Title />
          </div>
          <BoardCard currentDice={currentDiceHandler} results={currentResultsHandler}/>
          <div className="results">
              <ResultsCard dice={currentDice} results={results}/>
          </div>
      </div>
  );
}

export default App;
