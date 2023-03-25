import React, { useRef, useState } from "react";

const CharacterCounter = () => {
  const dataRef = useRef();
  const [characterCount, setCharacterCount] = useState(0);

  console.log("render called");

  const onCountCharacters = () => {
    setCharacterCount(dataRef.current.value.length);
  };

  return (
    <div>
      <h2>Character Counter</h2>
      <p>
        <label>Enter a text </label>
        <input type="text" ref={dataRef}></input>
      </p>
      <p>
        <label>The text has {characterCount} number of characters</label>
      </p>
      <p>
        <button onClick={onCountCharacters}>Count</button>
      </p>
    </div>
  );
};
export default CharacterCounter;
