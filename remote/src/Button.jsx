import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice";

export const Button = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>{count}</button>
    </div>
  );
};
