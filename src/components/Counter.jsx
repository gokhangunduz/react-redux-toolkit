import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <span>{count}</span>
    </div>
  );
}
export default Counter;
