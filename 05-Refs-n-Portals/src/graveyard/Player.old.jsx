import { useState } from "react";

export default function Player() {
  const [inputValue, setValue] = useState(''); // initial input value must be an an empty string, and not completely empty
  const [playerName, setName] = useState('Stranger'); // initial player name set

  function handleChange(event) {
    setValue(event.target.value); // on change the value of the player name is stored in the change event value
  }

  function handleClick() { // conditional check set to revert name back to default is input field is an empty string
    const trimmedValue = inputValue.trim(); // trim removes excess whitespaces to ensure n whitespaces cannot be set as a name
    setName(trimmedValue !== '' ? trimmedValue : 'Stranger'); // when button is clicked, the stored input value state is then set as the name
  }


  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" onChange={handleChange} value={inputValue} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
