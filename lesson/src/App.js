import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFoundComponent";
import EmployeeCreate from "./pages/Employee/EmployeeCreate";
import EmployeeList from "./pages/Employee/EmployeeList";
import EmployeeView from "./pages/Employee/EmployeeView";
import EmployeeEdit from "./pages/Employee/EmployeeEdit";
// import ClickCounterComponent from "./components/ClickCounterComponent";
// import { AppContextProvider } from "./components/AppContext";
// import EmployeeContextComponent from "./components/EmployeeContextComponent";
// import SalaryContextComponent from "./components/SalaryContextComponent";
// import AddNumberComponent from "./components/AddNumberComponent";
//import EmployeeCallBack from "./components/EmployeeCallBack";
// import CharacterCounter from "./components/CharacterCounterComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeList />}></Route>
      <Route path="/employee/:id" element={<EmployeeView />}></Route>
      <Route path="/employee/edit/:id" element={<EmployeeEdit />}></Route>
      <Route path="/employee/new" element={<EmployeeCreate />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>

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
    // <ClickCounterComponent />
  );
}

export default App;
