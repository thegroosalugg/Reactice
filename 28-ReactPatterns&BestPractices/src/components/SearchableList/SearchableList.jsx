import { createContext, useContext, useRef, useState } from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

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
    }, 500);
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
        <SearchList flex={flex} keyFn={keyFn}>
          {children}
        </SearchList>
      </div>
    </SearchContext.Provider>
  );
}
