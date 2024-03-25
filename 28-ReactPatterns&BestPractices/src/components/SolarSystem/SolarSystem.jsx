import './SolarSystem.css'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpaceItem from './SpaceItem';
import Modal from '../Modal/Modal';
import { useSearchContext } from '../SearchableList/SearchableList';

export default function SolarSystem({ item }) {
  const { searchResults } = useSearchContext();
  const [isOpen, setIsOpen] = useState(false);

  let offsetMultiplier = 1

  if (searchResults.length > 5) {
    offsetMultiplier += 1
  }

  const offset = (10 - searchResults.length) * offsetMultiplier;

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <motion.div
        className={`space ${item.name}`}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        animate={{ translateX: offset }}
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
