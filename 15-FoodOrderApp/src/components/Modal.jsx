import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, closeModal, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    // onClose is a built-in listener that will execute a function if the dialog is closed with ESC instead of button
    // this is necessary to reset the modal state to false, otherwise its impossible to reopen modal
    <dialog className="modal" ref={dialog} onClose={closeModal}>
      {open ? children : null}
      <p className="modal-actions">
        <button className="text-button" onClick={closeModal}>
          Close
        </button>
        <button className="button">Checkout</button>
      </p>
    </dialog>,
    document.getElementById("modal")
  );
}
