import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux"; // import from react-dedux. Select any state data directly
                  // useDispatch dispatch action types to execute those functions
const Counter = () => {
  const counter = useSelector((state) => state.counter); // grab the counter value with redux. Automatic subscription ensures up to date values
  const dispatch = useDispatch(); // initialise dispatch function

  const increaseCounter = () => {
    dispatch({ type: "plus" }); // call dispatch action sending an object with an action type
  };
  const decreaseCounter = () => {
    dispatch({ type: "minus" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
                     {/* connect function to event listenders */}
        <button onClick={increaseCounter}>Plus</button>
        <button onClick={decreaseCounter}>Minus</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
