import './Board.css'
import Die from "./Die";


const Board = (props) => {
    const gridConfig = (num) => {
        return "grid-template-" + num
    }
        return (
            <div className={'grid ' + gridConfig(props.gridSize)} >
                    {props.dice.map(die => <Die key= {die.id} id={die.id} letter={die.letter} />)}
            </div>
        )

}

export default Board;