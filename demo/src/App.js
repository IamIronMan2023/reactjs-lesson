import "./App.css";
//import CountCharacter from "./components/CharacterCounterComponent";
import Employee from "./components/EmployeeComponent";
import SalaryComponent from "./components/SalaryComponent";
import { SalaryContextProvider } from "./components/SalaryContext";
//import AddNumberComponent from "./components/AddNumberComponents";

function App() {
  return (
    <div>
      <SalaryContextProvider>
        <Employee
          Id="007"
          firstName="James"
          lastName="Bond"
          age="20"
        ></Employee>
        <SalaryComponent />
      </SalaryContextProvider>
    </div>

    // <div>
    //   <AddNumberComponent />
    // </div>
  );
}

export default App;
