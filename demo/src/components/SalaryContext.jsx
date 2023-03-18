import React, {Component, createContext} from "react";

const SalaryContext = createContext();

export class SalaryContextProvider extends Component{
    state = {
        salary: 0
    }

    updateSalary = (value) => {
        this.setState({salary: value})
    }

    render(){
        const {salary} = this.state;
        const {updateSalary} = this;

        return(
            <SalaryContext.Provider value={{salary, updateSalary}}>
                {this.props.children}
            </SalaryContext.Provider>
        );
    }
}

export default SalaryContext;