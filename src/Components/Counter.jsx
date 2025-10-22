import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      <button
        className="bg-green-400 px-2 py-1"
        onClick={() => dispatch(increment())}
      >
        Increase
      </button>
      <button
        className="bg-green-400 px-2 py-1"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        IncreaseByFive
      </button>
      <button className="bg-yellow-200 px-2 py-1 w-87">{count}</button>
      <button
        className="bg-green-400 px-2 py-1"
        onClick={() => dispatch(decrement())}
      >
        Increase
      </button>
      <button
        className="bg-green-400 px-2 py-1"
        onClick={() => dispatch(decrementByAmount(5))}
      >
        IncreaseByFive
      </button>
    </div>
  );
};

export default Counter;
