import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Place({ image, title, description }) {
  const dragRef = useRef();

  return (
    <motion.article
      className='place'
      whileHover={{
        scale: 1.2,
        x: 20,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }}
    >
      <motion.img
        src={image}
        alt={title}
        ref={dragRef}
        whileTap={{
          scale: 3,
          rotate: 1080,
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        drag
        dragSnapToOrigin={dragRef}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </motion.article>
  );
}
