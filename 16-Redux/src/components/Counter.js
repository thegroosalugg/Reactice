import classes from './Counter.module.css';
import { useSelector } from 'react-redux'; // import from react-dedux. Select any state data directly

const Counter = () => {
  const counter = useSelector((state) => state.counter) // grab the counter value with redux. Automatic subscription ensures up to date values
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
