import './Buttons.css';

const Buttons = (props) => {

    const shuffleHandler = () => {
        props.shuffle()
    }

    return (
        <div className="options">
            <div className="drop-down">
                <label>
                    Board Size:
                    <select value={props.size} onChange={props.changeSize}>
                        <option value="3">3x3</option>
                        <option value="4">4x4</option>
                        <option value="5">5x5</option>
                        <option value="6">6x6</option>
                    </select>
                </label>
            </div>
            <div className="button-group">
                <button className="button" onClick={shuffleHandler}>SHUFFLE</button>
                <button className="button" onClick={props.solve}>SOLVE</button>
            </div>
        </div>
    )

}

export default Buttons;