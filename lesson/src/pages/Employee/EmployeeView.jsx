import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EmployeeView = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = "5|rIpAi1D9s0NEF0H2G30Eg8jwCpQE92ZYE2Jb7pLu";

  useEffect(() => {
    const controller = new AbortController();
    let url = `http://127.0.0.1:8000/api/employee/show/${id}`;

    const requestOptions = {
      signal: controller.signal,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setEmployee(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleDelete = (e) => {
    if (window.confirm("Do you really want to do this?")) {
      let url = `http://127.0.0.1:8000/api/employee/delete/${id}`;

      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      fetch(url, requestOptions)
        .then(() => {
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <h1>Employee</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h3>First Name : {employee.first_name}</h3>
          <h3>Last Name: {employee.last_name}</h3>
          <h3>Age: {employee.age}</h3>
          <h3>Email: {employee.email}</h3>
          <h3>Gender: {employee.gender}</h3>

          <p>
            <Link to={`/employee/edit/${employee.id}`}> Edit </Link>
          </p>
          <p>
            <Link to="/employee/new"> Add </Link>
          </p>
          <p>
            <Link onClick={handleDelete}> Delete </Link>
          </p>
          <p>
            <Link to="/"> Employee List </Link>
          </p>
        </>
      )}
    </>
  );
};

export default EmployeeView;