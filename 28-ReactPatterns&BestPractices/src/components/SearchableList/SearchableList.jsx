import { useState } from 'react';

// Render props: React pattern where a component's functionality is provided by passing a function (the "render prop")
// as a prop to the component. This function returns React elements that define what the component should render.

export default function SearchableList({ items, keyFn, children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className='searchable-list'>
      <input type='search' placeholder='Search' onChange={handleChange} />
      <ul>
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
