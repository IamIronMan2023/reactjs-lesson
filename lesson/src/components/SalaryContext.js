import React, { useContext, useState } from "react";
import AppContext from "./AppContext";

const SalaryContext = () => {
  const [dailyRate, setDailyRate] = useState(0);
  const [noOfDays, setNoOfDays] = useState(30);
  const { setMonthlySalary } = useContext(AppContext);

  const updateSalary = () => {
    let salary = parseFloat(dailyRate) * parseFloat(noOfDays);
    setMonthlySalary(salary);
  };

  return (
    <div>
      <h2>Salary Details</h2>
      <p>
        <label>Daily Rate:</label>
        <input
          type="number"
          name="dailyRate"
          onChange={(e) => setDailyRate(e.target.value)}
          value={dailyRate}
        ></input>
      </p>
      <p>
        <label>No. of Days in month:</label>
        <input
          type="number"
          name="noOfDays"
          onChange={(e) => setNoOfDays(e.target.value)}
          value={noOfDays}
        ></input>
      </p>

      <button onClick={updateSalary}>Update</button>
    </div>
  );
};

export default SalaryContext;
