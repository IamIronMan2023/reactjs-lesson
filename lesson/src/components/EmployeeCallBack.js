import React, { Component } from "react";
import SalaryCallBack from "./SalaryCallBack";

export default class EmployeeCallBack extends Component {
  constructor(props) {
    super(props);
    this.state = { monthlySalary: 0 };
  }

  getUpdatedSalary = (salary) => {
    this.setState({ monthlySalary: salary });
  };

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
            Monthly Salary: <b>{this.state.monthlySalary.toFixed(2)}</b>
          </label>
        </p>
        <SalaryCallBack
          onMonthlySalaryChanged={this.getUpdatedSalary}
        ></SalaryCallBack>
      </div>
    );
  }
}
