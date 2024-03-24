import { useState } from 'react';
import SPaceItem from './SpaceItem';

export default function SolarSystem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className='space' onClick={handleClick}>
      <h2 className={item.name}>{item.name}</h2>
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
