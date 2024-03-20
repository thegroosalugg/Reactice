import { createPortal } from 'react-dom';
import { motion } from 'framer-motion'; // import framer motion

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className='backdrop' onClick={onClose} />
      <motion.dialog
        open
        initial={{ opacity: 0, y: 30 }} // Initial prop sets the element state as it is rendered
        animate={{ opacity: 1, y: 0 }} // Animation applied after the initial state
        exit={{ opacity: 0, y: 30 }} // Exit prop sets the state when the modal exits the DOM, requires AnimatePresence
        transition={{ duration: 0.6 }}
        className='modal'
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
