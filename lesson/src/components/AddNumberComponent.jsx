import React, {useState} from "react";

const AddNumberComponent = ()  => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [sum, setSum] = useState(0);    

  const onCalculateSum = () => {
    setSum(parseInt(firstNumber) + parseInt(secondNumber))
  };


    return (
      <div>
        <p>
          <label>First Number </label>
          <input
            type="number"
            name="firstNumber"
            onChange={e=>{setFirstNumber(e.target.value)}}
            value={firstNumber}
          ></input>
        </p>
        <p>
          <label>Second Number </label>
          <input
            type="number"
            name="secondNumber"
            onChange={e=>{setSecondNumber(e.target.value)}}
            value={secondNumber}            
          ></input>
        </p>
        <p>
          <label> Sum: {sum}</label>
        </p>
        <p>
          <button onClick={onCalculateSum}>Calculate</button>
        </p>
      </div>
    );
  }

  export default AddNumberComponent;