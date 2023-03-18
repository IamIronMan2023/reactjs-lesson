import React, { useState, createContext } from "react";

const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const [monthlySalary, setMonthlySalary] = useState(0);

  return (
    <AppContext.Provider value={{ monthlySalary, setMonthlySalary }}>
      {children}
    </AppContext.Provider>
  );
}

// export class AppContextProvider extends Component {
//   state = {
//     monthlySalary: 1000,
//     updateSalary: this.updateSalary,
//   };

//   updateSalary = () => {
//     this.setState({ monthlySalary: 10 });
//   };

//   render() {
//     return (
//       <AppContext.Provider value={this.state}>
//         {this.props.children}
//       </AppContext.Provider>
//     );
//   }
// }

export default AppContext;
