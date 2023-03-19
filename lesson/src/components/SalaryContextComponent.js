import React, { useContext, useState } from "react";
import AppContext from "./AppContext";

const SalaryContextComponent = () => {
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

// class SalaryContextComponent extends React.Component {
//   static contextType = AppContext;

//   constructor(props) {
//     super(props);
//     this.state = { dailyRate: 0, noOfDays: 30 };
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   updateSalary = () => {
//     let salary =
//       parseFloat(this.state.dailyRate) * parseFloat(this.state.noOfDays);
//     this.context.changeSalary(salary);
//   };

//   render() {
//     return (
//       <div>
//         <h2>Salary Details</h2>
//         <p>
//           <label>Daily Rate:</label>
//           <input
//             type="number"
//             name="dailyRate"
//             onChange={this.handleChange}
//             value={this.state.dailyRate}
//           ></input>
//         </p>
//         <p>
//           <label>No. of Days in month:</label>
//           <input
//             type="number"
//             name="noOfDays"
//             onChange={this.handleChange}
//             value={this.state.noOfDays}
//           ></input>
//         </p>

//         <button onClick={this.updateSalary}>Update</button>
//       </div>
//     );
//   }
// }

export default SalaryContextComponent;
