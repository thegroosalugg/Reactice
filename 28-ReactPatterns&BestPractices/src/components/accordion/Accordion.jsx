import { createContext, useContext, useState } from 'react';

const AccordionContext = createContext({
  openItemId: null, // functions and states stored here as skeletons for ease of autocomplete when they're called
  toggleItem: () => {},
});

// accordion provider wraps only the accordion, not the whole app, as such we create a specific context to call
export function useAccordionContext() {
  const ctx = useContext(AccordionContext); // create custom useContext hook to replace vanilla hook

  if (!ctx) {
    throw new Error('This function must be wrapped by <Accordion>'); // ensure the hook is only called within its place in the compound
  }

  return ctx; // are we using it for accordion? If so, return the context
}

export default function Accordion({ className, children }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId(prevId => (prevId === id ? null : id)); // sets active to inactive and inactive to active
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    // this ensures that we do not convolute our app by wrapping it with providers where they're not needed
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}
