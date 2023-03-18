import AppContext from "./AppContext";
import React, { useContext } from "react";

// const EmployeeContext = (props) => {
//   const { monthlySalary } = useContext(AppContext);

//   return (
//     <div>
//       <h2>Employee Profile</h2>
//       <p>
//         <label>
//           Employee ID: <b>{props.Id}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee First Name: <b>{props.firstName}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Last Name: <b>{props.lastName}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Age: <b>{props.age}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Salary:
//           <b>{monthlySalary}</b>
//         </label>
//       </p>
//     </div>
//   );
// };

class EmployeeContext extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Employee Profile</h2>
        <p>
          <label>
            Employee ID: <b>{this.props.Id}</b>
          </label>
        </p>
        <p>
          <label>
            Employee First Name: <b>{this.props.firstName}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Last Name: <b>{this.props.lastName}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Age: <b>{this.props.age}</b>
          </label>
        </p>
        <p>
          <label>
            Salary:
            <b>{this.context.monthlySalary}</b>
          </label>
        </p>
      </div>
    );
  }
}

export default EmployeeContext;
