import { useState, memo, useCallback, useMemo } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// memo is a react hook which will compare the old & new prop values, and if they are exactly the same React will not execute this component again
// memo is used to optimise app performance as unrelated state changes which re-execute the parent App component also re-execute all the child components
// memo should only be used on a component that is as high up in the component tree as possible. If the parent component does not execute, nor do its children
const Counter = memo(function Counter({ initialCount }) { // memo is no longer needed here due to state uplifting, but has been kept for learning reference
  log("<Counter /> rendered", 1);

  // useMemo, like memo wraps a normal JS function as opposed to a component function above
  // we pass a function, i.e. an anonymous arrow function, which then returns the result of the function that we want to prevent executing
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]) // the dependency is the prop the function relies on, if the prop changes then the function re-executes

  const [counter, setCounter] = useState(initialCount);

  // all functions are JS objects, they're rendered each time the App is, and create a new object
  const handleDecrement = useCallback(function handleDecrement() { // useCallback stops these functions from being executed each time the app is rendered
    setCounter((prevCounter) => prevCounter - 1); // re-rended function prevents memo from inside IconButton from working, callback prevents this function from recreation
  }, [])  // empty array of dependencies which will re-execute the function when app is rendered.

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }, [])

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
});

export default Counter
