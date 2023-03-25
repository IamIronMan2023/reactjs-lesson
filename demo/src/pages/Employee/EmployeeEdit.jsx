import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EmployeeEdit = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
  });
  const navigate = useNavigate();

  const token = "5|rIpAi1D9s0NEF0H2G30Eg8jwCpQE92ZYE2Jb7pLu";

  useEffect(() => {
    let url = `http://127.0.0.1:8000/api/employee/show/${id}`;

    const controller = new AbortController();

    const requestOptions = {
      method: "GET",
      headers: {
        signal: controller.signal,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => setEmployee(json));

    return () => {
      controller.abort();
    };
  }, []);

  const handleChanged = (e) => {
    setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:8000/api/employee/update/${id}`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        first_name: employee.first_name,
        last_name: employee.last_name,
        age: employee.age,
        email: employee.email,
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => navigate(`/employee/${data.id}`))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Employee Edit</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            required="required"
            onChange={handleChanged}
            value={employee.first_name}
          ></input>
        </p>

        <p>
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            required="required"
            onChange={handleChanged}
            value={employee.last_name}
          ></input>
        </p>

        <p>
          <label>Age</label>
          <input
            type="number"
            name="age"
            required="required"
            onChange={handleChanged}
            value={employee.age}
          ></input>
        </p>

        <p>
          <label>Email Address</label>
          <input
            type="text"
            name="email"
            required="required"
            onChange={handleChanged}
            value={employee.email}
          ></input>
        </p>

        <input type="submit" value="Update" />
      </form>
    </>
  );
};

export default EmployeeEdit;
