import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//---------------Elements
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = <h1 className="hello">Hello World</h1>;
// root.render(element);

// const app = ReactDOM.createRoot(document.getElementById("app"));
// const newElement = <h1 className="hello">Hello World Again </h1>;
// app.render(newElement);

//---------------React coding with JS
// const element = React.createElement(
//   "div",
//   { className: "hello" },
//   React.createElement("h1", null, "Hello World"),
//   React.createElement("h1", null, "Hello World Again")
// );
// root.render(element);

//---------------React coding with JSX
//notes: babel compiler is using to compile jsx to convert it to js. it is easier to learn
// because it same as html

// const name = "davy";
// function getName() {
//   return "davy";
// }

// const element = (
//   <div class="hello">
//     <h1>Hello World {name}</h1>
//     <h1>Hello World {getName()}</h1>
//     <h1>Hello World Again </h1>
//     <h1>{2 * 2}</h1>
//   </div>
// );

//---------------Function Components
//Note: Always start component name with Capital Letter

//---------------Non Arrow Function
// function DisplayEmployee(employee) {
//   return (
//     <div>
//       <p>
//         <label>
//           Employee ID: <b>{employee.Id}</b>
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
//     </div>
//   );
// }

//---------------Arrow Function Component
// var DisplayEmployee = (employee) => {
//   return (
//  <h2>Employee Profile</h2>
//     <div>
//       <p>
//         <label>
//           Employee ID: <b>{employee.Id}</b>
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
//       <p>
//         <DepartmentInfo
//           Id={employee.departmentId}
//           name={employee.departmentName}
//         ></DepartmentInfo>
//       </p>
//     </div>
//   );
// };

// const DepartmentInfo = (departmentInfo) => {
//   return (
//<h2>Department Information</h2>;
//     <div>
//       <p>
//         <label>
//           Department ID: <b>{departmentInfo.Id}</b>
//         </label>
//       </p>
//       <p>
//         <label>
//           Department Name: <b>{departmentInfo.name}</b>
//         </label>
//       </p>
//     </div>
//   );
// };

// const element = (
//   <DisplayEmployee
//     Id="007"
//     firstName="James"
//     lastName="Bond"
//     Age="20"
//     departmentId="1"
//     departmentName="CIA"
//   ></DisplayEmployee>
// );

//---------------Class Component
// class Employee extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//     //Notes props are read only this will produce error
//     //this.props.firstName = "James";
//   }

//   render() {
//     return (
//       <div>
//         <h2>Employee Profile</h2>
//         <p>
//           <label>
//             Employee ID: <b>{this.props.Id}</b>
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
//           Id={this.props.departmentId}
//           name={this.props.departmentName}
//         ></Department>
//       </div>
//     );
//   }
// }

// class Department extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>Department Information</h2>
//         <p>
//           <label>
//             Department ID: <b>{this.props.Id}</b>
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
//     departmentId="1"
//     departmentName="CIA"
//   ></Employee>
// );

//---------------Class State Management

//---------------Employee click count
// class Employee extends React.Component {
//   state = { clickCount: 0 };
//   //clickCount = 0;
//   addEmployee = () => {
//     this.setState({ clickCount: this.state.clickCount + 1 });
//     // alert(`Add Employee button is clicked ${this.clickCount} times`);
//   };

//   render() {
//     return (
//       <div>
//         <h2>You are in Employee Component</h2>
//         <p>
//           <button onClick={this.addEmployee}>Add Employee</button>
//         </p>
//         <p>
//           <label>
//             {/* Click Count: <b>{this.clickCount}</b> */}
//             Click Count: <b>{this.state.clickCount}</b>
//           </label>
//         </p>
//       </div>
//     );
//   }
// }

// const element = <Employee></Employee>;

// class CharacterCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { characterCount: 0, textEntered: "" };
//   }

//   onCountCharacters = () => {
//     let text = this.state.textEntered;
//     this.setState({ characterCount: text.length });
//   };

//   onTextChange = (event) => {
//     let newText = event.target.value;
//     this.setState({ textEntered: newText });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Character Counter</h2>
//         <p>
//           <label>Enter a text </label>
//           <input type="text" onChange={this.onTextChange}></input>
//         </p>
//         <p>
//           <label>
//             The text has {this.state.characterCount} number of characters
//           </label>
//         </p>
//         <p>
//           <button onClick={this.onCountCharacters}>Count</button>
//         </p>
//       </div>
//     );
//   }
// }

// const element = <CharacterCounter></CharacterCounter>;

//---------------AddNumber Component
class AddNumberComponent extends React.Component {
  constructor() {
    super();
    this.state = { sum: 0, firstNumber: 0, secondNumber: 0 };
  }

  onCalculateSum = () => {
    this.setState({
      sum: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber),
    });
  };

  onInputChange = (event) => {
    let value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  render() {
    return (
      <div>
        <p>
          <label>First Number </label>
          <input
            type="number"
            name="firstNumber"
            onChange={this.onInputChange}
          ></input>
        </p>
        <p>
          <label>Second Number </label>
          <input
            type="number"
            name="secondNumber"
            onChange={this.onInputChange}
          ></input>
        </p>
        <p>
          <label> Sum: {this.state.sum}</label>
        </p>
        <p>
          <button onClick={this.onCalculateSum}>Calculate</button>
        </p>
      </div>
    );
  }
}
const element = <AddNumberComponent></AddNumberComponent>;

root.render(element);
