import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpaceItem from './SpaceItem';
import Modal from '../Modal';

export default function SolarSystem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <motion.div
        className={`space ${item.name}`}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'easeInOut', duration: 0.5 }}
      />
      <AnimatePresence>
        {isOpen && (
          <Modal onClose={handleClick}>
            <SpaceItem {...item} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
