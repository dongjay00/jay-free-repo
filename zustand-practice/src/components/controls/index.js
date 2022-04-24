import { useStore } from "../../stores";
import "./index.css";

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  const decreasePopulation = useStore((state) => state.decreasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);
  return (
    <>
      <button className="control-button" onClick={increasePopulation}>
        one bear come
      </button>
      <button className="control-button" onClick={decreasePopulation}>
        one bear leave
      </button>
      <button className="control-button" onClick={removeAllBears}>
        all bears gone
      </button>
    </>
  );
}

export default Controls;
