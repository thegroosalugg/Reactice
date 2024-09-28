// @ts-nocheck
import { useRef } from 'react';

const Modal = ({ children, open, toggle }: { open: boolean, toggle: () => void, children: React.ReactNode }) => {
  const dialog = useRef<HTMLDialogElement | null>(null);

  if (open) {
    dialog.current?.showModal();
  }

  function closeModal() {
    dialog.current?.close();
  }

  return (
    <>
      <dialog ref={dialog} className={css.modal} onClose={toggle}>
        {children}
        <button onClick={closeModal}>CLOSE</button>
      </dialog>
    </>
  );
};

export default Modal;
