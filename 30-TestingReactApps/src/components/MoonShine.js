import { useState } from 'react';
import Hooch from './Hooch'

export default function MoonShine() {
  const [clicked, setClicked] = useState(false);

  function changeText() {
    setClicked((prevState) => !prevState);
  }

  return (
    <div className='center'>
      <h2>MoonShine</h2>
      {!clicked && <Hooch>Bootlegging</Hooch>}
      {clicked && <Hooch>Prohibition</Hooch>}
      <button onClick={changeText}>Mash</button>
    </div>
  );
}
