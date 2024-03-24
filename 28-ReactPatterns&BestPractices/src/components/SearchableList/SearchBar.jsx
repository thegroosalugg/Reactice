import { motion } from 'framer-motion';
import { useSearchContext } from './SearchableList';

export default function SearchBar({ label }) {
  const { handleChange } = useSearchContext();

  return (
    <motion.input
      type='search'
      placeholder={label}
      onChange={handleChange}
      initial={{ translateY: 100 }}
      animate={{ translateY: 0 }}
      transition={{ type: 'easeInOut', duration: 0.5 }}
      whileFocus={{ scale: 1.1 }}
    />
  );
}
