// @ts-nocheck  // removes annoying parameter any type messages for file
import Header from "./components/Header/Header";
import Examples from "./components/Examples/Examples";
import CoreConcepts from "./components/CoreConcept/CoreConcepts";

function App() {
  return (
    // content is wrapped in React fragments instead of empty divs
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
