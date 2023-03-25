import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EmployeeView = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
  });

  const token = "5|rIpAi1D9s0NEF0H2G30Eg8jwCpQE92ZYE2Jb7pLu";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
  }, []);

  const handleDelete = (e) => {
    if (window.confirm("Are you really sure you want to delete this record?")) {
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
      <h1>Employee Detail</h1>

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
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
          <p>
            <Link onClick={handleDelete}>Delete</Link>
          </p>
        </>
      )}
    </>
  );
};

export default EmployeeView;
