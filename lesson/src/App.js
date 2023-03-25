import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFoundComponent";
import EmployeeCreate from "./pages/Employee/EmployeeCreate";
import EmployeeList from "./pages/Employee/EmployeeList";
import EmployeeView from "./pages/Employee/EmployeeView";
import EmployeeEdit from "./pages/Employee/EmployeeEdit";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import ClickCounterComponent from "./components/ClickCounterComponent";
// import { AppContextProvider } from "./components/AppContext";
// import EmployeeContextComponent from "./components/EmployeeContextComponent";
// import SalaryContextComponent from "./components/SalaryContextComponent";
// import AddNumberComponent from "./components/AddNumberComponent";
//import EmployeeCallBack from "./components/EmployeeCallBack";
import CharacterCounter from "./components/CharacterCounterComponent";
import SecureRoute from "./SecureRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SecureRoute />}>
            <Route element={<EmployeeList />} path="/" exact />
            <Route path="/employee">
              <Route path=":id" element={<EmployeeView />}></Route>
              <Route path="edit/:id" element={<EmployeeEdit />}></Route>
              <Route path="new" element={<EmployeeCreate />}></Route>
            </Route>
          </Route>

          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/character-counter"
            element={<CharacterCounter />}
          ></Route>
          <Route
            path="/click-counter-component"
            element={<ClickCounterComponent />}
          ></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
