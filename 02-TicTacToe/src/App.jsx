import { useState } from "react";
import Player from "./components/Player";
import Log from "./components/Log";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./components/winning_combinations";

const PLAYERS = { // create an object where a symbol corresponds to individual name
  X: "Player",
  O: "Enemy",
}

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function checkActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    // switches symbol between each player once a turn has been taken
    currentPlayer = "O";
  }

  return currentPlayer;
}

function createGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_BOARD.map((array) => [...array])]; // create a deep copy of original array and aLL nested arrays as well

  for (const turn of gameTurns) {
    const { square, player } = turn; // uses destructuring to extract the square and player properties from the current turn object.
    // The square property contains information about the position of the move, and the player property contains the symbol of the player making the move.
    const { row, col } = square; // further destructures the square object to extract the row and col properties, representing the row and column of the move on the game board.

    gameBoard[row][col] = player; // updates the gameBoard by assigning the current player's symbol (X or O) to the specified position (row, col) on the board.
    // the final outcome might look liks this for instance: gameBoard[2][1] = 'X';
    // gameBoard[turn.square.row][turn.square.col] = turn.player; // the above destructing can also be written like this
  }
  return gameBoard
}

function whosTheWinner(players, gameBoard) {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const fstSquareSym = gameBoard[combination[0].row][combination[0].column];
    const sndSquareSym = gameBoard[combination[1].row][combination[1].column];
    const trdSquareSym = gameBoard[combination[2].row][combination[2].column];

    if (
      fstSquareSym &&
      fstSquareSym === sndSquareSym &&
      fstSquareSym === trdSquareSym
    ) {
      winner = players[fstSquareSym]; // winner name dynamically set by accessing object with corresponding symbol
    }
  }
  return winner
}

function App() {
  const [gameTurns, setGameTurn] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = checkActivePlayer(gameTurns);
  const gameBoard = createGameBoard(gameTurns)
  const winner = whosTheWinner(players, gameBoard)
  const draw = !winner && gameTurns.length === 9;

  function handleActive(rowIndex, colIndex) {
    setGameTurn((prevTurn) => {
      const currentPlayer = checkActivePlayer(prevTurn);

      const updateTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updateTurn;
    });
  }

  function handleRestart() {
    setGameTurn([]); // reset useState back to an empty array, and resets game as all other elements rely on this state
  }

  function handleEditName(symbol, newName) { // creates copy of original names then adjusts only the name that matches the symbol
    setPlayers((prevNames) => {
      return { ...prevNames, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onEditName={handleEditName}
          />
          {/* passes argument to player component, isActive is a boolean prop whose value is set to true if activePlayer matches the symbol */}
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onEditName={handleEditName}
          />
        </ol>
        {(winner || draw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard selectSquare={handleActive} board={gameBoard} />
        {/* selectSquare is a function passed as a prop from the App component to the GameBoard component */}
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
