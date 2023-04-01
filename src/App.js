import './App.css';
import { Testfunction } from "./components/Testfunction";
import  Testclass  from "./components/Testclass";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drink</h1>
        <ul>
          <li>Tea</li>
          <li>Coffee</li>
          <li>Milk</li>
        </ul>
        <Testfunction/>
        <Testclass/>
      </header>
    </div>
  );
}

export default App;
