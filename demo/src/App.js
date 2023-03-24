import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import EmployeeEdit from "./pages/Employee/EmployeeEdit";
import EmployeeList from "./pages/Employee/EmployeeList";
import EmployeeView from "./pages/Employee/EmployeeView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeList />}></Route>
      <Route path="/employee/:id" element={<EmployeeView />}></Route>
      <Route path="/employee/edit/:id" element={<EmployeeEdit />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
