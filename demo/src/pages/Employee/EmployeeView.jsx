import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EmployeeView = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
  });

  useEffect(() => {
    let token = "5|rIpAi1D9s0NEF0H2G30Eg8jwCpQE92ZYE2Jb7pLu";
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

  return (
    <>
      <h1>Employee Detail</h1>
      <h3>First name: {employee.first_name}</h3>
      <h3>Last name: {employee.last_name}</h3>
      <h3>Age: {employee.age}</h3>
      <h3>Email: {employee.email}</h3>

      <p>
        <Link to="/">Employee List</Link>
      </p>
      <p>
        <Link to={`/employee/edit/${employee.id}`}>Edit</Link>
      </p>
    </>
  );
};

export default EmployeeView;
