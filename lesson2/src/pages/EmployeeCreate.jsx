import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeCreate = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `${import.meta.env.VITE_API_URL}/employees`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        first_name: employee.firstName,
        last_name: employee.lastName,
        age: employee.age,
        email: employee.email,
        gender: employee.gender,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        navigate(`/employees/${data.employee.id}`);
      });
  };

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <h1>Add new employee</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={handleChanged}
            required="required"
          />
        </p>
        <p>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={handleChanged}
            required="required"
          />
        </p>
        <p>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={employee.age}
            onChange={handleChanged}
            required="required"
          />
        </p>
        <p>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChanged}
            required="required"
          />
        </p>
        <p>
          <label>Gender</label>
          <select
            name="gender"
            value={employee.gender}
            onChange={handleChanged}
            required
            focus
          >
            <option selected disabled value="">
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </p>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default EmployeeCreate;
