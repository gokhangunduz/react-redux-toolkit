import { plus, minus } from "../stores/CounterSlice";
import { useDispatch } from "react-redux";

function CounterControl() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(minus())}>1 Azalt</button>
      <button onClick={() => dispatch(plus())}>1 Arttır</button>
    </div>
  );
}
export default CounterControl;
