import { useStore } from "../../stores";

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} bears around here ...</h1>;
}

export default BearCounter;
