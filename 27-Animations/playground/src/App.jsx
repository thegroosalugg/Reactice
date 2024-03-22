import { useState } from 'react';
import { motion } from 'framer-motion'; // import from framer motion

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return (
    // convert HTML elements to frame motion
    <div id='demo'>
      <motion.div
        id='box'
        animate={{ x, y, rotate }} // takes object as value with x, y & rotate properties which match the state so this is short JS syntax
        transition={{
          duration: 0.1, // transition duration
          bounce: 0.5, // set bounce between 0 and 1
          type: 'spring', // configure animation type
        }}
      />

      <div id='inputs'>
        <p>
          <label htmlFor='x'>X</label>
          <input
            type='number'
            id='x'
            onChange={(event) => setX(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor='y'>Y</label>
          <input
            type='number'
            id='y'
            onChange={(event) => setY(+event.target.value)}
          />
        </p>

        <p>
          <label htmlFor='rotate'>Rotate</label>
          <input
            type='number'
            id='rotate'
            onChange={(event) => setRotate(+event.target.value)}
          />
        </p>
      </div>
    </div>
  );
}

export default App;
