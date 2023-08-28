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
  const [loading, setLoading] = useState(false);
  const url = `${import.meta.env.VITE_API_URL}/employees/${id}`;
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const requestOptions = {
      method: "GET",
      headers: {
        signal: controller.signal,
        "Content-Type": "application/json",
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
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
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
          <h3>Gender: {employee.gender}</h3>
          <p>
            <Link to="/">Employee List</Link>
          </p>
          <p>
            <Link to={`/employees/edit/${id}`}>Edit</Link>
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
