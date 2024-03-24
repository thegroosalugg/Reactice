import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpaceItem from './SpaceItem';

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
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            className='content'
            initial={{ opacity: 0, scaleY: 0.5 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            >
            <SpaceItem item={item} />
            </motion.div>
            )}
          </AnimatePresence> */}
    </>
  );
}
