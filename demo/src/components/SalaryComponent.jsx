import React, {Component} from "react";
import SalaryContext from "./SalaryContext";

export default class SalaryComponent extends Component{
    static contextType = SalaryContext;

    constructor(props){
        super(props);
        this.state = {dailyRate: 0, noOfDays: 30}
    }


    handleChange = (e) =>{
        // let value = e.target.value;
        // let name = e.target.name;        

        //code destructuring
        const {name, value} = e.target;
        this.setState({[name] : value});
    }

    updateSalary = () =>{
        let salary = parseFloat(this.state.dailyRate) * parseFloat(this.state.noOfDays);
        this.context.updateSalary(salary);
    }

    render(){
        return(

            <div><h2>Salary Detail</h2>
            <p>
                <label>Daily Rate </label>
                <input type="number" name="dailyRate" onChange={this.handleChange} value={this.state.dailyRate} ></input>
            </p>
            <p>
                <label>No Of Days </label>
                <input type="number" name="noOfDays" onChange={this.handleChange} value={this.state.noOfDays} ></input>
            </p>
            <button onClick={this.updateSalary}> Update </button>

            </div>
        );        
    }

}