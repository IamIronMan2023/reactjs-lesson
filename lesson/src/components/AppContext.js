import React, { useState, createContext } from "react";

// const AppContext = createContext(null);

// export function AppContextProvider({ children }) {
//   const [monthlySalary, setMonthlySalary] = useState(0);

//   return (
//     <AppContext.Provider value={{ monthlySalary, setMonthlySalary }}>
//       {children}
//     </AppContext.Provider>
//   );
// }

const AppContext = createContext();
export class AppContextProvider extends React.Component {
  state = {
    monthlySalary: 1000,
  };

  changeSalary = (salary) => {
    this.setState({ monthlySalary: salary });
  };

  render() {
    const { monthlySalary } = this.state;
    const { changeSalary } = this;

    return (
      <AppContext.Provider value={{ monthlySalary, changeSalary }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;
