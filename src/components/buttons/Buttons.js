import './Buttons.css';

const Buttons = (props) => {

    const solveHandler = () => {
        console.log("ready to solve: " + props.dice)
    }

    const shuffleHandler = () => {
        props.shuffle()
    }

    return (
        <div className="options">
            <button className="button" onClick={shuffleHandler}>SHUFFLE</button>
            <button className="button" onClick={solveHandler}>SOLVE</button>
        </div>
    )

}

export default Buttons;