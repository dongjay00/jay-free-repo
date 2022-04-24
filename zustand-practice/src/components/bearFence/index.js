import "./index.css";
import { useStore } from "../../stores";
import { zustandBear } from "../../assets";

function BearFence() {
  const bears = useStore((state) => state.bears);
  const renderingBears = () => {
    const result = [];
    for (let i = 0; i < bears; i++) {
      result.push(
        <div>
          <img key={i} src={zustandBear} alt="zustandBear" />
        </div>
      );
    }
    return result;
  };

  return <div className="bear-fence">{renderingBears()}</div>;
}

export default BearFence;
