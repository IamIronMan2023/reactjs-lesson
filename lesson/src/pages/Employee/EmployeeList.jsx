import React, { useState, useEffect } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("http://127.0.0.1:8000/api/employees", { signal: controller.signal })
      .then((response) => response.json())
      .then((json) => setEmployees(json));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>

        {employees.map((employee) => (
          <tr>
            <td>{employee.full_name}</td>
            <td>{employee.email}</td>
            <td>
              <a href="/">View</a>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default EmployeeList;
