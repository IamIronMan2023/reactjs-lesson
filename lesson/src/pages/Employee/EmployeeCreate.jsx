import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const EmployeeCreate = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
  });
  const { token } = useAuth();

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const ageRef = useRef(0);
  const emailRef = useRef("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:8000/api/employee/store`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        age: ageRef.current.value,
        email: emailRef.current.value,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        navigate(`/employee/${data.id}`);
      });
  };

  return (
    <div>
      <h1>Employee Edit</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>First Name</label>
          <input type="text" ref={firstNameRef} required="required" />
        </p>
        <p>
          <label>Last Name</label>
          <input type="text" ref={lastNameRef} required="required" />
        </p>
        <p>
          <label>Age</label>
          <input type="number" ref={ageRef} required="required" />
        </p>
        <p>
          <label>Email Address</label>
          <input type="email" ref={emailRef} required="required" />
        </p>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default EmployeeCreate;
