import { forwardRef, useRef, useImperativeHandle } from "react"; // react component that allows the forwarding of useReg from one component to another
import { createPortal } from "react-dom"; // portals allow you to render HTML content elsewhere in the DOM

const FAIL = ['Massive Fail', 'Reactions of a Snail', 'Terrible', 'Just Awful', 'So Slow', 'Do Better']

function sampleArray(arr) { return arr[Math.floor(Math.random() * arr.length)] }; // random number generator
  // chosen array selects index via random number

const ResultsModal = forwardRef(function ResultsModal({ timeLeft, targetTime, onReset, score }, ref) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {timeLeft <= 0 && <h2>{sampleArray(FAIL)}</h2>} {/* onClose is a built-in listener that will pass handleReset if the dialog is closed with ESC instead of button */}
      {timeLeft > 0 && <h2>Score: {score}</h2>}
      <p>
        Target Time: <strong>{targetTime} seconds</strong>
      </p>
      <p>
        Timer stopped with <strong>{(timeLeft / 1000).toFixed(2)} seconds remaining</strong>
      </p>
      <form method="dialog" onSubmit={onReset}> {/* onSubmit is a react method which will execute function when nested button clicked */}
        {/* form dialog is a built-in HTML function, the button will know how to close the dialog of the main parent element*/}
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById('modal') // createPortal takes 2 arguments, the HTML code, and the DOM selector of where you want it to render
  ); // 'modal' is the ID of the div at the top of the < body >
})

export default ResultsModal
