import React, {useState} from "react";

const AddNumberComponent = ()  => {
    // const [firstNumber, setFirstNumber] = useState(0);
    // const [secondNumber, setSecondNumber] = useState(0);
    // const [sum, setSum] = useState(0);    

    const [data, setData] = useState({
      firstNumber :0,
      secondNumber :0,      
      sum :0,            
    });

    const handleChange = (e) =>{
      const {name, value} = e.target;
      setData((prev) => {
        return {...prev, [name]: value}
      })

    }

  const onCalculateSum = () => {
    let value = parseFloat(data.firstNumber) + parseFloat(data.secondNumber);
    setData((prev) => {
      return {...prev, sum: value}
    })
  };


    return (
      <div>
        <p>
          <label>First Number </label>
          <input
            type="number"
            name="firstNumber"
            onChange={handleChange}
            value={data.firstNumber}
          ></input>
        </p>
        <p>
          <label>Second Number </label>
          <input
            type="number"
            name="secondNumber"
            onChange={handleChange}
            value={data.secondNumber}            
          ></input>
        </p>
        <p>
          <label> Sum: {data.sum}</label>
        </p>
        <p>
          <button onClick={onCalculateSum}>Calculate</button>
        </p>
      </div>
    );
  }

  export default AddNumberComponent;