import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// //JSX code
// const name = "James Bond";
// function getName() {
//   return name;
// }

// const element = (
//   <div className="hello">
//     <h1>Hello World!</h1>
//     <h2>Hello World! {getName()}</h2>
//     <h2>{2 * 2}</h2>
//   </div>
// );

// var Employee = (employee) => {
//   return (
//     <div>
//       <h2>Employee Profile</h2>
//       <p>
//         <label>
//           Employee Id: <b>{employee.Id}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee First Name: <b>{employee.firstName}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Last Name: <b>{employee.lastName}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Employee Age: <b>{employee.age}</b>
//         </label>
//       </p>

//       <Department
//         id={employee.deparmentId}
//         name={employee.departmentName}
//       ></Department>
//     </div>
//   );
// };

// const Department = (department) => {
//   return (
//     <div>
//       <h2>Department Information</h2>
//       <p>
//         <label>
//           Department Id: <b>{department.id}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Department Name: <b>{department.name}</b>
//         </label>
//       </p>
//     </div>
//   );
// };

// const element = (
//   <Employee
//     Id="007"
//     firstName="James"
//     lastName="Bond"
//     age="20"
//     deparmentId="1"
//     departmentName="CIA"
//   ></Employee>
// );

// class Employee extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h2>Employee Profile</h2>
//         <p>
//           <label>
//             Employee Id: <b>{this.props.Id}</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee First Name: <b>{this.props.firstName}</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Last Name: <b>{this.props.lastName}</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Age: <b>{this.props.age}</b>
//           </label>
//         </p>
//         <Department
//           id={this.props.departmentId}
//           name={this.props.departmentName}
//         ></Department>
//       </div>
//     );
//   }
// }

// class Department extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h2>Department Information</h2>
//         <p>
//           <label>
//             Department Id: <b>{this.props.id}</b>
//           </label>
//         </p>
//         <p>
//           <label>
//             Department Name: <b>{this.props.name}</b>
//           </label>
//         </p>
//       </div>
//     );
//   }
// }

// const element = (
//   <Employee
//     Id="007"
//     firstName="James"
//     lastName="Bond"
//     age="20"
//     deparmentId="1"
//     departmentName="CIA"
//   ></Employee>
// );

// root.render(element);

// class ClickCounter extends React.Component {
//   state = { clickCount: 0 };

//   constructor(props) {
//     super(props);
//   }

//   onClickButton = () => {
//     this.setState({ clickCount: this.state.clickCount + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Click Counter Component</h2>
//         <p>
//           <label>The button was clicked {this.state.clickCount} times</label>
//         </p>
//         <button onClick={this.onClickButton}>Click Me</button>
//       </div>
//     );
//   }
// }

// root.render(<ClickCounter></ClickCounter>);

class AddNumberComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0, firstNumber: 0, secondNumber: 0 };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  calculate = () => {
    this.setState({
      sum: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber),
    });
  };

  render() {
    return (
      <div>
        <p>
          <label>First Number:</label>
          <input
            type="number"
            name="firstNumber"
            onChange={this.onInputChange}
          ></input>
        </p>

        <p>
          <label>Second Number:</label>
          <input
            type="number"
            name="secondNumber"
            onChange={this.onInputChange}
          ></input>
        </p>
        <p>
          <label>The sum is {this.state.sum}</label>
        </p>
        <p>
          <button onClick={this.calculate}>Calculate</button>
        </p>
      </div>
    );
  }
}

root.render(<AddNumberComponent></AddNumberComponent>);
