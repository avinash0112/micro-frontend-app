import { useState } from "react";
import "./App.css";
import { Button } from "remoteApp/Button";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "remoteApp/counterReducer";

function App() {
  const [count2, setCount] = useState(0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log("count", count);
  return (
    <div className="app-container">
      <div>
        <h1>Host Application </h1>
        <h2>Store value at host : {count}</h2>

        <button onClick={() => dispatch(increment())}>
          increment remote store
        </button>
        <h2>Local state at host : {count2}</h2>
        <button onClick={() => setCount((c) => c + 1)}>
          increment local state
        </button>
      </div>
      <div>
        <h1>Remote Application </h1>
        <h2>Store value at remote : {count}</h2>
        <Button />
        <h2>Update state using remote dispatch</h2>
        <button onClick={() => dispatch(increment())}>
          increment remote store
        </button>
      </div>
    </div>
  );
}

export default App;
