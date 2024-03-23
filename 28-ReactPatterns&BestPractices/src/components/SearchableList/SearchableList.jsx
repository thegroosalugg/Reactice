import { useState } from 'react';
import Place from './Place';

export default function SearchableList({ items }) {
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
          <li key={item.id}>
            <Place {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
