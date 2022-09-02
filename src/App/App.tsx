import StormButton from "../components/StormButton";
import Level from "../components/Level";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StormButton color="primary" />
        <Level />
      </header>
    </div>
  );
}

export default App;
