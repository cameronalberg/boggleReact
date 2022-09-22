import './Die.css';

const Die = (props) => {
    return (
        <div id={props.id} className={"tile " + props.pathDisplay}>{props.letter}</div>
    )

}

export default Die;