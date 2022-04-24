import "./App.css";
import { BearCounter, Controls, BearFence } from "./components";

function App() {
  return (
    <div className="App">
      <BearCounter />
      <Controls />
      <div className="App-fence-area">
        <BearFence />
      </div>
    </div>
  );
}

export default App;
