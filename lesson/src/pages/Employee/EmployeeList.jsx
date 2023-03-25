import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const controller = new AbortController();
    let token = "5|rIpAi1D9s0NEF0H2G30Eg8jwCpQE92ZYE2Jb7pLu";

    const requestOptions = {
      signal: controller.signal,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    setLoading(true);
    fetch("http://127.0.0.1:8000/api/employees", requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setEmployees(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h2>Employee List</h2>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <Link to="/employee/new">Add New Employee</Link>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.full_name}</td>
                  <td>{employee.email}</td>
                  <td>
                    <Link to={`/employee/${employee.id}`}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <span>{token}</span>
        </>
      )}
    </>
  );
};

export default EmployeeList;
