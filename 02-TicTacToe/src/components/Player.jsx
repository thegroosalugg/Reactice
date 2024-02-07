import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onEditName }) {
  const [editting, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleClick() {
    setEdit((toggle) => !toggle); // the arrow function reverses the current state, i.e. change the boolean true to false
    // the arrow function name is irrelevant and serve only as a parameter
    if (editting) {
      onEditName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value); // event.target.value will save the value of the input in useState playerName
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;

  if (editting) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  } // output value must be stored inside input (playerName), onChange is an event listener which calls a function

  return (
    // adds active CSS class to active player or removes it
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {/* <span className="player-name">{initialName}</span> */}
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{editting ? "Save" : "Edit"}</button>
    </li>
  );
}
