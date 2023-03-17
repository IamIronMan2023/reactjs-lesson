import React, {Component} from "react";

class Employee extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h2>Employee Profile</h2>
                <p>
                    <label>Employee Id <b>{this.props.Id}</b></label>
                </p>
                <p>
                    <label>Employee First Name <b>{this.props.firstName}</b></label>
                </p>
                <p>
                    <label>Employee Last Name <b>{this.props.lastName}</b></label>
                </p>
                <p>
                    <label>Employee Age <b>{this.props.age}</b></label>
                </p>

            </div>

        );
    }

}

export default Employee;