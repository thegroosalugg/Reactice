import { createPortal } from 'react-dom';
import { motion } from 'framer-motion'; // import framer motion

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className='backdrop' onClick={onClose} />
      <motion.dialog
        open
        variants={{ // use variants to set initial, animate and exit values to reduce code. Keys inside are non reserved
          hide: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0 }
        }}
        initial={'hide'} // Initial prop sets the element state as it is rendered
        animate={'show'} // Animation applied after the initial state
        exit={'hide'} // Exit prop sets the state when the modal exits the DOM, requires AnimatePresence
        transition={{ duration: 0.3 }}
        className='modal'
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
