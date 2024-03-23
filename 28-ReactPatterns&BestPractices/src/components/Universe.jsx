import { useState } from 'react';

export default function Universe({ spaceRock }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className='space' onClick={handleClick}>
      <header className={spaceRock.type}>
        <h3>{spaceRock.name}</h3>
        <h5>{spaceRock.type.toUpperCase()}</h5>
      </header>
      <article className={isOpen ? '' : 'hidden'}>
        {Object.keys(spaceRock).map((key, index) => {
          if (key !== 'name' && key !== 'type') {
            return (
              <div key={index} className='data'>
                <span>
                  <b>{key}: </b>{' '}
                </span>
                <span>{spaceRock[key]}</span>
              </div>
            );
          }
        })}
      </article>
    </div>
  );
}
