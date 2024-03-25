import { motion } from 'framer-motion';
import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

export default function AccordionTitle({ className, children }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();

  return (
    <motion.h3
      className={className}
      onClick={() => toggleItem(id)}
      whileHover={{ color: '#0f86efc2', backgroundColor: '#F0F8FF' }}
      transition={{ type: 'easeInOut', duration: 0.6 }}
    >
      {children}
    </motion.h3>
  );
}
