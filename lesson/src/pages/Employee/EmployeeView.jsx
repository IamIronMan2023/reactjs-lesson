import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EmployeeView = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    gender: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    let token = "5|rIpAi1D9s0NEF0H2G30Eg8jwCpQE92ZYE2Jb7pLu";
    let url = `http://127.0.0.1:8000/api/employee/show/${id}`;

    const requestOptions = {
      signal: controller.signal,
      method: "GET",
      headers: {
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
  }, [id]);

  return (
    <div>
      <h1>Employee</h1>
      <h3>First Name : {employee.first_name}</h3>
      <h3>Last Name: {employee.last_name}</h3>
      <h3>Age: {employee.age}</h3>
      <h3>Email: {employee.email}</h3>
      <h3>Gender: {employee.gender}</h3>

      <p>
        <Link to={`/employee/edit/${employee.id}`}> Edit </Link>
      </p>
      <p>
        <Link to="/"> Employee List </Link>
      </p>
    </div>
  );
};

export default EmployeeView;
