import React from "react";
import "./App.css";
import ClickCounterComponent from "./components/ClickCounterComponent";
// import { AppContextProvider } from "./components/AppContext";
// import EmployeeContextComponent from "./components/EmployeeContextComponent";
// import SalaryContextComponent from "./components/SalaryContextComponent";
// import AddNumberComponent from "./components/AddNumberComponent";
//import EmployeeCallBack from "./components/EmployeeCallBack";
// import CharacterCounter from "./components/CharacterCounterComponent";

function App() {
  return (
    // <div>
    //   <EmployeeCallBack />
    // </div>

    // <AppContextProvider>
    //   <EmployeeContextComponent
    //     Id="007"
    //     firstName="James"
    //     lastName="Bond"
    //     age="20"
    //   ></EmployeeContextComponent>
    //   <SalaryContextComponent />
    // </AppContextProvider>
    //<AddNumberComponent />
    // <CharacterCounter />
    <ClickCounterComponent />
  );
}

export default App;
