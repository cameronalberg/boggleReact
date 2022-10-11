import {useEffect, useState} from "react";

const Definition = (props) => {
    const [defLoaded, setDefLoaded] = useState(false)
    const [definition, setDefinition] = useState("No definition found.")
    const getDefinition = () => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`)
            .then((response) => {
                if(response.status !== 200){
                    return null
                } else {
                    return response.json()
                }
            })
            .then((data) => parseDefinition(data))
            .then(() => setDefLoaded(true))
        return true
    }

    const parseDefinition = (data) => {
        if (data !== null) {
            const meanings = data[0].meanings
            let def = (meanings[0].definitions)[0].definition
            try {
                def = def.toString()
                setDefinition(def)
            } catch {

            }
        }
    }
    useEffect(() => {
        getDefinition()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            {defLoaded.length === 0 ? (
                <p className="loading">Loading...</p>
            ) : (
                <p> {definition} </p>
            )}
        </div>
    )
}

export default Definition;