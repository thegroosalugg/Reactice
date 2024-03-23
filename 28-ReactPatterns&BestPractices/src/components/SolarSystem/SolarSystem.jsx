import { useState } from 'react';
import SPaceItem from './SpaceItem';

export default function SolarSystem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className='space' onClick={handleClick}>
      <header className={item.type}>
        <h3>{item.name}</h3>
        <h5>{item.type.toUpperCase()}</h5>
      </header>
      <div
        className={isOpen ? '' : 'hidden'}
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <SPaceItem item={item} />
      </div>
    </div>
  );
}
