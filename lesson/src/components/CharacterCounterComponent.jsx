import React, {useState} from "react";

const CharacterCounter = () => {
    const [data, setData] = useState({
        characterCount:0 ,
        textEntered: ""
    })

    const onCountCharacters = () => {
         setData({characterCount: data.textEntered.length});
    };

    const handleChanged = (e) => {
        setData((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })
    };

    return (
        <div>
        <h2>Character Counter</h2>
        <p>
            <label>Enter a text </label>
            <input type="text" name="textEntered" onChange={handleChanged}></input>
        </p>
        <p>
            <label>
            The text has {data.characterCount} number of characters
            </label>
        </p>
        <p>
            <button onClick={onCountCharacters}>Count</button>
        </p>
        </div>
    );
}
export default CharacterCounter