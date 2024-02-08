import { useState, useRef } from "react";
import ResultsModal from "./ResultsModal";

// Original code using setTimeout set to graveyard as new code overhaulded and old code retained for learning purposes

export default function Timer({ title, targetTime }) {
  const [timerStarted, setStarted] = useState(false);
  const [timerExpired, setExpired] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => { // must always target the current ref
      setExpired(true); // setTimeout is a built-in JS function
      // dialog.current.showModal() // the built-in dialog element, has a showModal method which can be called to show it
      dialog.current.open() // with imperative handle we call a function within our component (the name 'open' can be set to any name)
    }, targetTime * 1000); // time is always in MS so set time must be multiplied * 1000 ms

    setStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current); // clearTimeout is a built-in JS function
  }

  return (
    <>
      <ResultsModal ref={dialog} result={"Massive Fail"} targetTime={targetTime} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Running" : "Dormant"}
        </p>
      </section>
    </>
  );
}
