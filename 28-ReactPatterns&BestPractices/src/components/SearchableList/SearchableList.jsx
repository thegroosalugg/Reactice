export default function SearchableList({ items }) {
  return (
    <div className='searchable-list'>
      <input type='search' placeholder='Search' />
      <ul>
        {items.map((item) => (
          <li key={item.id} className='place'>
            <img src={item.image} alt={item.title} />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
