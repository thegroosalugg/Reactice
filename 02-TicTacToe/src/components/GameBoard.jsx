export default function GameBoard({ selectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => selectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null} // button is disabled if the symbol is not empty
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

// Original code for reference:
// each row is an array. Each 'column' is a single element inside the array, and not an actual column
// const [gameBoard, setGameboard] = useState(initialBoard);

// function handleBoard(rowIndex, colIndex) {
//   setGameboard((prevGameBoard) => {
//     const updateBoard = [
//       // new inmutable array is created using ...spread operator as to not alter original
//       ...prevGameBoard.map((innerArray) => [...innerArray]), // a second spread operator clones the nested arrays
//     ];
//     updateBoard[rowIndex][colIndex] = activeSymbol; // the value of the new variable is then updated without changing the original
//     return updateBoard;
//   });

//   selectSquare(); // the prop function is called here to notify the parent component 'App' that a square has been selected
// }
// This pattern is often used in React to allow child components to communicate with their parent components.
// By passing a function as a prop from the parent to the child, the child can call that function to interact with the parent.
// In this case, it's a way for the GameBoard component to signal to the App component that a move has been made.
