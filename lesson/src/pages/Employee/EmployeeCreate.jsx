import React, { useState } from "react";

const EmployeeCreate = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    gender: "",
  });

  return (
    <div>
      <h1>Create New Employee</h1>
    </div>
  );
};

export default EmployeeCreate;
