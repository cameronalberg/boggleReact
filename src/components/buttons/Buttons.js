import './Buttons.css';

const Buttons = (props) => {

    const shuffleHandler = () => {
        props.shuffle()
    }

    return (
        <div className="options">
            <button className="button" onClick={shuffleHandler}>SHUFFLE</button>
            <button className="button" onClick={props.solve}>SOLVE</button>
        </div>
    )

}

export default Buttons;