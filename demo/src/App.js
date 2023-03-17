import "./App.css";
import CountCharacter from "./components/CharacterCounterComponent";
import Employee from "./components/EmployeeComponent";

function App() {
  return (
    <div>
      <Employee Id="007" firstName="James" lastName="Bond" age="20"></Employee>
      <CountCharacter />
    </div>
  );
}

export default App;
