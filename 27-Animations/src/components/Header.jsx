import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import NewChallenge from './NewChallenge.jsx';

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      <AnimatePresence>
        {/* wrap around components exiting the DOM */}
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>

      <header id='main-header'>
        <h1>Your Challenges</h1>
        <motion.button
          whileHover={{ scale: 1.1 }} // increase or decrease button size while hovering
          transition={{ type: 'spring', stiffness: 500, mass: 5 }}
          onClick={handleStartAddNewChallenge}
          className='button'
        >
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
