import { motion } from 'framer-motion';
import { useSearchContext } from './SearchableList';

export default function SearchList({ flex, keyFn, children }) {
  const { searchResults } = useSearchContext();

  return (
    <motion.ul
      className={flex ? 'space-list' : ''}
      variants={{
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        hidden: { opacity: 0 },
      }}
      initial='hidden'
      animate='visible'
    >
      {searchResults.map((item) => (
        // pass a function as  a prop, so we can pass the found item to the parent for varying handling of keys
        <motion.li
          key={keyFn(item)}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 1.2 },
          }}
        >
          {/* here children expects to receive a function that returns renderable code.
              This allows the child to pass data up to the parent, and for the parent to expect a parameter */}
          {children(item)}
        </motion.li>
      ))}
    </motion.ul>
  );
}
