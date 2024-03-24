import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ children, onClose }) {
  return createPortal(
    <>
      <div className='backdrop' onClick={onClose} />
      <motion.dialog
        open
        variants={{
          hide: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0 },
        }}
        initial={'hide'}
        animate={'show'}
        exit={'hide'}
        transition={{ duration: 0.3 }}
        className='modal'
      >
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
