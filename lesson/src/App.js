import React from "react";
import "./App.css";
import { AppContextProvider } from "./components/AppContext";
import EmployeeContext from "./components/EmployeeContext";
import SalaryContext from "./components/SalaryContext";
import AddNumberComponent from "./components/AddNumberComponent";

//import EmployeeCallBack from "./components/EmployeeCallBack";

function App() {
  return (
    // <div>
    //   <EmployeeCallBack />
    // </div>

    // <AppContextProvider>
    //   <EmployeeContext
    //     Id="007"
    //     firstName="James"
    //     lastName="Bond"
    //     age="20"
    //   ></EmployeeContext>
    //   <SalaryContext />
    // </AppContextProvider>

    <AddNumberComponent />
  );
}

export default App;
