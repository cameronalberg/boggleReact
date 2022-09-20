import './App.css';
import Title from "./components/Title";
import Results from "./components/results/Results";
import BoardContainer from "./components/board/BoardContainer";
import {useState} from "react";

function App() {
    const [currentDice, setCurrentDice] = useState("")
    const currentDiceHandler = (dice) => {
      setCurrentDice(dice)
      console.log("app dice: " + dice)
    }
  return (
      <div className="App">
          <div className= "App-header">
            <Title />
          </div>
          <BoardContainer currentDice={currentDiceHandler}/>
          <div className="results">
              <Results dice={currentDice}/>
          </div>
      </div>
  );
}

export default App;
