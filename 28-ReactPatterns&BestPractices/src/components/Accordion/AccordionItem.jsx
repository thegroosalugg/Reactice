import { createContext, useContext } from 'react';
import { motion } from 'framer-motion';

const AccordionItemContext = createContext();

// accordion provider wraps only the accordion, not the whole app, as such we create a specific context to call
export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext); // create custom useContext hook to replace vanilla hook

  if (!ctx) {
    throw new Error('useAccordionItemContext must be wrapped by <Accordion>');
  }

  return ctx;
}

export default function AccordionItem({ id, className, children }) {
  return (
    <AccordionItemContext.Provider value={id}>
      {/* added layout to track Accordion.content entering/exitting DOM */}
      <motion.li layout className={className}>
        {children}
      </motion.li>
    </AccordionItemContext.Provider>
  );
}
