import Player from "./components/Player.jsx";
import Timer from "./components/Timer.jsx";
import Log from "./components/Log.jsx"
import { useState } from "react";

function App() {
  const [scores, setScores] = useState([]);

  function getScore({targetTime, score}) { // function is passed as prop to Timer where the scores are calculated
    setScores((prevScores) => [           // function records the score and which timer played as an array of objects
      ...prevScores,
      { timer: targetTime, score: score },
    ]);
  };

  console.log(scores)

  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title={"commoner"} targetTime={3} getScore={getScore} />
        <Timer title={"stranger"} targetTime={7} getScore={getScore}/>
        <Timer title={"nomad"} targetTime={10} getScore={getScore} />
        <Timer title={"outlaw"} targetTime={15} getScore={getScore} />
      </div>
      <Log scores={scores} />
    </>
  );
}

export default App;
