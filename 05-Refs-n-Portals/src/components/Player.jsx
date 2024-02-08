import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(); // useRef captures input data without the need for onChange event listener
  const [inputName, setName] = useState(null); // State to hold the input name


  function handleClick() {
    const noWhitespace = playerName.current.value.trim(); // trim removes leading and trailing whitespaces
    setName(noWhitespace || 'Stranger'); // Set inputName with the trimmed value or 'Stranger' if empty
    playerName.current.value = '' // this line clears the input field after input is submitted
  }

  return ( // ?? operator provides same output as the ternary (inputName ? inputName : 'Stanger')
    <section id="player">
      <h2>Welcome {inputName ?? 'Stranger'}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
