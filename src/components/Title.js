import './Title.css';

const Title = () => {

    return (
        <div className="card">
            <p className="title">Boggle</p>
            <p className="descriptor">Built with React by Cameron Alberg </p>
            <p className="link"><a href="https://github.com/cameronalberg/boggleReact">(source code)</a> <a href="https://boggle-api.calberg.me">(API usage)</a></p>
        </div>
    )

}

export default Title;