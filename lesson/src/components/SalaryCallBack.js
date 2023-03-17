import React, { Component } from "react";

export default class SalaryCallBack extends Component {
  constructor(props) {
    super(props);
    this.state = { dailyRate: 0, noOfDays: 30 };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updateSalary = () => {
    let salary =
      parseFloat(this.state.dailyRate) * parseFloat(this.state.noOfDays);
    this.props.onMonthlySalaryChanged(salary);
  };

  render() {
    return (
      <div>
        <h2>Salary Details</h2>
        <p>
          <label>Daily Rate:</label>
          <input
            type="number"
            name="dailyRate"
            onChange={this.onInputChange}
            value={this.state.dailyRate}
          ></input>
        </p>
        <p>
          <label>No. of Days in month:</label>
          <input
            type="number"
            name="noOfDays"
            onChange={this.onInputChange}
            value={this.state.noOfDays}
          ></input>
        </p>
        <button onClick={this.updateSalary}>Update</button>
      </div>
    );
  }
}
