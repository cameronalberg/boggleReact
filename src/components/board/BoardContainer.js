import './BoardContainer.css'
import Buttons from "../buttons/Buttons";
import Board from "./Board";
import {useEffect, useState} from "react";

const BoardContainer = (props) => {
    const [activeBoard, setActiveBoard] = useState(false)
    const [dice, setDice] = useState([])
    const [boardString, setBoardString] = useState("")
    const boardSize = 3

    const generateTemplateBoard = () => {
        if (dice.length !== 0) {
            setActiveBoard(false)
            setDice([])
        }
        fetch(`https://boggle.calberg.me/shuffle/?boardSize=${boardSize}`)
                .then((response) => response.json())
                .then((data) => putDice(data.board))
                .then(() => setActiveBoard(true))
        return dice
    }

    const putDice = (data) => {
        const parsedData = parse(data)
        // console.log("received data: " + parsedData)
        for (let i = 0; i < parsedData.length; i++) {
            // console.log("assigning letter: " + parsedData[i])
            const templateDie = {
                id: i,
                letter: parsedData[i]
            };
            setDice((dice) => {
                return [...dice, templateDie]
            })
        }
        props.currentDice(parsedData)
        setBoardString(parsedData)
    }

    const parse = (data) => {
        return data.replace(/-|\s/g, "")
    }
        useEffect(() => generateTemplateBoard, [])

        return (
            <div>
                {activeBoard === false ? (
                    <div className="board-container pulse">
                            <p className="load">Loading</p>
                    </div>) : (
                    <div className="board-container">
                        <Board gridSize={boardSize} dice={dice}/>
                    </div>
                )}
                <Buttons dice = {boardString} shuffle={generateTemplateBoard}/>
            </div>
        )
}

export default BoardContainer;