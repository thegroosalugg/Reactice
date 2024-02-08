import { useState, useRef } from "react";
import ResultsModal from "./ResultsModal";

export default function Timer({ title, targetTime, getScore }) {
  const [timeLeft, setTime] = useState(targetTime * 1000); // times by milliseconds

  const timer = useRef();
  const dialog = useRef();

  const timerActive = timeLeft > 0 && timeLeft < targetTime * 1000 // timer is active when it hasn't expired (0) and has started (< targetTime)
  const score = Math.round((1- timeLeft / (targetTime * 1000)) * 100)

  if (timeLeft <= 0 ) {
    clearInterval(timer.current); // when times runs out, interval is cleared and target time reset
    dialog.current.open() // with imperative handle we call a function within our component (the name 'open' can be set to any name)
  }

  function handleStart() {
    timer.current = setInterval(() => { // must always target the current ref
      setTime(lastTimeStamp => lastTimeStamp - 10) // deduct 10ms from target time each interval
    }, 10); // Intervals every 10ms
  }

  function handleStop() {
    clearInterval(timer.current); // clearTimeout/Interval are built-in JS functions
    dialog.current.open() // timer stopped manually with button
    getScore({targetTime, score});
  }

  function handleReset() {
    setTime(targetTime * 1000) // reset the timer but to target time on complete
  }

  return (
    <>
      <ResultsModal ref={dialog} targetTime={targetTime} timeLeft={timeLeft} onReset={handleReset} score={score} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Running" : "Dormant"}
        </p>
      </section>
    </>
  );
}
