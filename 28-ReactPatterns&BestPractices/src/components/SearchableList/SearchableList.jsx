import { useRef, useState } from 'react';

// Render props: React pattern where a component's functionality is provided by passing a function (the "render prop")
// as a prop to the component. This function returns React elements that define what the component should render.

export default function SearchableList({ flex, items, keyFn, label, children }) {
  const lastChange = useRef(); // store as a ref to presrve its value across state re-renders
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current); // would work the same without the if check, this runs everytime when there is a timer
      console.log('Clearing Timeout', lastChange.current)
    }

    // function adds a delay before changing state after user input, to let the user to finish typing before searching
    lastChange.current = setTimeout(() => {
      lastChange.current = null; // would work without this. Clear Timeout already resets the timer
      setSearchTerm(event.target.value);
      console.log('Expired', lastChange.current)
    }, 1500);
  }


  return (
    <div className='searchable-list'>
      <input type='search' placeholder={label} onChange={handleChange} />
      <ul className={flex ? 'space-list' : ''}>
        {searchResults.map((item) => (
          // pass a function as  a prop, so we can pass the found item to the parent for varying handling of keys
          <li key={keyFn(item)}>
            {/* here children expects to receive a function that returns renderable code.
            This allows the child to pass data up to the parent, and for the parent to expect a parameter */}
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
