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
        if (dice.length !== 0) {
            setActiveBoard(false)
            props.results("")
        }
        fetch(`https://boggle-api.calberg.me/shuffle/?size=${boardSize}`)
                .then((response) => response.json())
                .then((data) => putDice(data.board))
                .then(() => setActiveBoard(true))
        return dice
    }

    const sizeHandler = (event) => {
        props.results("")
        setDice(() => {return []})
        setBoardSize(event.target.value)
    }

    const putDice = (data) => {
        let tempDice = []
        const parsedData = parse(data)
        // console.log("received data: " + parsedData)
        for (let i = 0; i < parsedData.length; i++) {
            // console.log("assigning letter: " + parsedData[i])
            const templateDie = {
                id: i,
                letter: parsedData[i],
                pathDisplay: ""
            };
            tempDice = [...tempDice, templateDie]
        }
        setDice(() => {return tempDice})
        props.currentDice(parsedData)
        setBoardString(parsedData)
    }

    const displayPath = () => {
        let tempDice = dice;
        if (!tempDice || tempDice.length === 0) {
            return
        }
        tempDice = tempDice.map((die) => {
                if (props.path === false || !props.path.includes(die.id)) {
                    return {...die, pathDisplay: ""}
                }
                else {
                    return {...die, pathDisplay: "highlight"}
                }
            })
        setDice(() => {return tempDice})
        // console.log("updated dice with path display: " + props.path)
    }

    const solveHandler = () => {
        fetch(`https://boggle-api.calberg.me/solve/?board=${boardString}`)
            .then((response) => response.json())
            .then((data) => props.results(data))
    }

    const parse = (data) => {
        return data.replace(/-|\s/g, "")
    }

    useEffect((data) => {
        displayPath(data)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.path]);

    useEffect(() => {
        setActiveBoard(false)
        shuffleHandler()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [boardSize]);

        return (
            <div>
                <div className="board-container active">
                    {activeBoard === false ? (
                                <p className="load">Loading</p>
                        ) : (
                    <Board gridSize={boardSize} dice={dice}/>
                    )}
                </div>
                <Buttons dice = {boardString} size= {boardSize} changeSize = {sizeHandler} shuffle={shuffleHandler} solve={solveHandler}/>
            </div>
        )
}

export default BoardCard;