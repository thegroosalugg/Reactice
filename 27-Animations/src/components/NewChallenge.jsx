import { useContext, useRef, useState } from 'react';
import { motion, useAnimate, stagger } from 'framer-motion'; // import framer motion

import { ChallengesContext } from '../store/challenges-context.jsx';
import Modal from './Modal.jsx';
import images from '../assets/images.js';

export default function NewChallenge({ onDone }) {
  const [scope, animate] = useAnimate(); // animate is the function we execute, scope is the ref assigned to the DOM elements, like useRef
  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  const [selectedImage, setSelectedImage] = useState(null);
  const { addChallenge } = useContext(ChallengesContext);

  function handleSelectImage(image) {
    setSelectedImage(image);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const challenge = {
      title: title.current.value,
      description: description.current.value,
      deadline: deadline.current.value,
      image: selectedImage,
    };

    if (
      !challenge.title.trim() ||
      !challenge.description.trim() ||
      !challenge.deadline.trim() ||
      !challenge.image
    ) {
      // Imperative animation triggers only when form validation fails
      animate(
        'input, textarea', // 1st argument: name affected elements in string form separated by commas
        { x: [10, 0, -10, 0] }, // 2nd argument: equivalent to animate prop, set desired animations
        { type: 'spring', duration: 0.2, delay: stagger(0.05) } // 3rd argument: transitions equivalent, set animation configuration
      ); // stagger needs to be imported, equivalent to staggerChildren that adds delay between element animations
      return;
    }

    onDone();
    addChallenge(challenge);
  }

  return (
    <Modal title='New Challenge' onClose={onDone}>
      <form id='new-challenge' onSubmit={handleSubmit} ref={scope}>
        <p>
          <label htmlFor='title'>Title</label>
          <input ref={title} type='text' name='title' id='title' />
        </p>

        <p>
          <label htmlFor='description'>Description</label>
          <textarea ref={description} name='description' id='description' />
        </p>

        <p>
          <label htmlFor='deadline'>Deadline</label>
          <input ref={deadline} type='date' name='deadline' id='deadline' />
        </p>

        <motion.ul
          id='new-challenge-images'
          variants={{ show: { transition: { staggerChildren: 0.05 } } }} // adds delay between each child's animation
        >
          {images.map((image) => (
            <motion.li
              variants={{
                // this is a child component, as such initial/exit/animation are set to these variant keys in the parent
                hide: { opacity: 0, scale: 0.5 }, // thus only the variant objects need to be defined, the other code needs no repetition
                show: { opacity: 1, scale: [0.8, 1.3, 1] }, // names of variant keys must match the parent
              }} // setting values inside an array is equivalent to @keyframes allowing you to set larger steps
              exit={{ opacity: 1, scale: 1 }} // overrides parent's exit property only for the child
              // when using spring, the exit animation waits for the child compponent to finish before closng the modal...
              // ...causing the backdrop to linger on screen. As such to avoid this, exit must be overriden manually with hardcode...
              /// ...one must not use the parent's variant key name to override exit or the child animations won't show
              transition={{ type: 'spring' }}
              key={image.alt}
              onClick={() => handleSelectImage(image)}
              className={selectedImage === image ? 'selected' : undefined}
            >
              <img {...image} />
            </motion.li>
          ))}
        </motion.ul>

        <p className='new-challenge-actions'>
          <button type='button' onClick={onDone}>
            Cancel
          </button>
          <button>Add Challenge</button>
        </p>
      </form>
    </Modal>
  );
}
