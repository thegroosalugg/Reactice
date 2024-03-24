import { createContext, useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

// Render props: React pattern where a component's functionality is provided by passing a function (the "render prop")
// as a prop to the component. This function returns React elements that define what the component should render.

const SearchContext = createContext({
  searchResults: [],
  searchTerm: '',
  handleChange: () => {},
});

export function useSearchContext() {
  const ctx = useContext(SearchContext);

  if (!ctx) {
    throw new Error('useSearchContext must be wrapped by <SearchableList>');
  }

  return ctx;
}

export default function SearchableList({ flex, items, keyFn, label, children }) {
  const lastChange = useRef(); // store as a ref to presrve its value across state re-renders
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current); // would work the same without the if check, this runs everytime when there is a timer
    }

    // function adds a delay before changing state after user input, to let the user to finish typing before searching
    lastChange.current = setTimeout(() => {
      lastChange.current = null; // would work without this. Clear Timeout already resets the timer
      setSearchTerm(event.target.value);
    }, 1500);
  }

  const contextValue = {
    searchTerm,
    searchResults,
    handleChange,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      <div className='searchable-list'>
        <SearchBar label={label} />
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
      </div>
    </SearchContext.Provider>
  );
}
