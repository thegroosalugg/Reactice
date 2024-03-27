import { useState } from 'react';

export default function MoonShine() {
  const [clicked, setClicked] = useState(false);

  function changeText() {
    setClicked((prevState) => !prevState);
  }

  return (
    <div>
      <h2>MoonShine</h2>
      {!clicked && <p>Bootlegging</p>}
      {clicked && <p>Prohibition</p>}
      <button onClick={changeText}>Mash</button>
    </div>
  );
}
