import React, { useRef, useState } from "react";

const UseRefComponent = () => {
  console.log("render");

  const [message, setMessage] = useState("");
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleClick = (e) => {
    setMessage(
      `Welcome ${firstNameRef.current.value} ${lastNameRef.current.value}`
    );
  };

  return (
    <div>
      <h2>Use Ref App</h2>
      <p>
        <label>First Name </label>
        <input type="text" ref={firstNameRef} />
      </p>
      <p>
        <label>Last Name </label>
        <input type="text" ref={lastNameRef} />
      </p>

      <p>
        <button onClick={handleClick}>Click</button>
      </p>
      <p>
        <label>{message}</label>
      </p>
    </div>
  );
};

export default UseRefComponent;
