import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import Configurator from "./components/Counter/Configurator.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    setChosenCount((prevCount) => prevCount + 1); // React does not update the state instantly within the same function, and as such new values will not be displayed
    // instead an arrow function must be used in order to update the new value within the same function
    console.log(chosenCount); // this would not work. It will display the previous state, not the latest that has been updated
  }

  return (
    <>
      <Header />
      <main>
        <Configurator onSet={handleSetCount} />
        {/* Key is not only for list items, it can be used on any component to unmount/remount when the value of the key changes */}
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
