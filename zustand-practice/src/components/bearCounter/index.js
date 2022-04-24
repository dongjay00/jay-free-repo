import { useStore } from "../../stores";

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return (
    <>
      <h1>{bears} bears around here ...</h1>
      {bears === 12 ? <h3>Fence is full</h3> : null}
    </>
  );
}

export default BearCounter;
