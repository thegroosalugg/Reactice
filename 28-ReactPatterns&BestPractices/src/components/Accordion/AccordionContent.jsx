import { motion, AnimatePresence } from 'framer-motion';
import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

export default function AccordionContent({ className, children }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();

  return (
    <AnimatePresence>
      {openItemId === id && (
        <motion.div
          className={className}
          initial={{ height: [0, 0.1, 0.2, 0.3], opacity: 0 }} // adjust height as parent is using 'layout' & this element changes DOM height
          animate={{ height: 'auto', opacity: 1 }} // inital height 0 as element not rendered, animate height auto as DOM height unknown
          exit={{ height: 'auto', opacity: 0 }}
          transition={{ type: 'smooth', duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
