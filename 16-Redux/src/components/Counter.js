import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
import { useSelector, useDispatch } from "react-redux"; // import from react-dedux.
// useSelector to grab any state data directly. useDispatch to call functions. connect to connect class based components with functions

// useDispatch dispatch action types to execute those functions
const Counter = () => {
  // access the state, the reducer, i.e. counter, then the state types held in that reducer
  const counter = useSelector((state) => state.counter.count);
  const display = useSelector((state) => state.counter.display);
  const dispatch = useDispatch(); // initialise dispatch function

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {display && <div className={classes.value}>{counter}</div>}
      <div>
        {/* reducer functions can be pointed to by being stored in functions, or executed as arrow functions directly in event listeners */}
        {/* toolkit createSlice also needs dispatch. Here arrow function executes dispatch which takes counterActions as an argument and its reducer with the required value as an argument */}
        <button onClick={() => dispatch(counterActions.update(1))}>Plus</button>
        <button onClick={() => dispatch(counterActions.update(5))}>Plus 5</button>
        <button onClick={() => dispatch(counterActions.update(-1))}>Minus</button>
      </div>
      <button onClick={() => dispatch(counterActions.toggle())}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
