import './BoardCard.css'
import Buttons from "../buttons/Buttons";
import Board from "./Board";
import {useEffect, useState} from "react";

const BoardCard = (props) => {
    const [activeBoard, setActiveBoard] = useState(false)
    const [dice, setDice] = useState([])
    const [boardString, setBoardString] = useState("")
    const [boardSize, setBoardSize] = useState(4)

    const shuffleHandler = () => {
        console.log("shuffling with board size " + boardSize)
        if (dice.length !== 0) {
            setActiveBoard(false)
            props.results("")
            setDice([])
        }
        fetch(`https://boggle.calberg.me/shuffle/?boardSize=${boardSize}`)
                .then((response) => response.json())
                .then((data) => putDice(data.board))
                .then(() => setActiveBoard(true))
        return dice
    }

    const sizeHandler = (event) => {
        setBoardSize(event.target.value)
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

    const solveHandler = () => {
        fetch(`https://boggle.calberg.me/solve/?board=${boardString}`)
            .then((response) => response.json())
            .then((data) => props.results(data))
    }

    const parse = (data) => {
        return data.replace(/-|\s/g, "")
    }
        useEffect(() => shuffleHandler, [])

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
                <Buttons dice = {boardString} size= {boardSize} changeSize = {sizeHandler} shuffle={shuffleHandler} solve={solveHandler}/>
            </div>
        )
}

export default BoardCard;