import ClickCountComponent from "./components/ClickCountComponent";
import Employee from "./components/EmployeeFunctionComponent";
import EventComponent from "./components/EventComponent";
import UseEffectDemoComponent from "./components/UseEffectDemoComponent";
import WelcomeComponent from "./components/WelcomeComponent";
import EmployeeList from "./pages/EmployeeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeView from "./pages/EmployeeView";
import NotFound from "./components/NotFoundComponent";
import EmployeeEdit from "./pages/EmployeeEdit";
import EmployeeCreate from "./pages/EmployeeCreate";

function App() {
  return (
    <>
      {/* <Employee
        id="007"
        firstName="James"
        lastName="Bond"
        age="20"
        departmentId="1"
        departmentName="CIA"
      /> */}

      {/* <EventComponent /> */}

      {/* <ClickCountComponent /> */}

      {/* <WelcomeComponent /> */}

      {/* <UseEffectDemoComponent /> */}

      {/* <EmployeeList /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employees/:id" element={<EmployeeView />}></Route>
          <Route path="/employees/create" element={<EmployeeCreate />}></Route>
          <Route path="/employees/edit/:id" element={<EmployeeEdit />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
