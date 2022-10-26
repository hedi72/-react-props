import "./App.css";
import Bye from "./Bye";
import Hello from "./Hello";

function App() {
  const name = "TAIEB";
  const lastName = "hedi";
  const alertMe = (name, lastName) => {
    alert("hello");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>workshop props</h1>
        {/* nom de props : value */}
        <Hello name={name} lastName={lastName} alertMe={alertMe} />
        {/* props children */}
        <Bye>corona</Bye>
      </header>
    </div>
  );
}

export default App;
