import { PLACES } from './assets/places/places';
import { SOLARSYSTEM } from './assets/solar-system/solarSystem';
import SearchableList from './components/SearchableList/SearchableList';
import Place from './components/Place';
import SolarSystem from './components/SolarSystem/SolarSystem';
import NavBar from './components/NavBar/NavBar';
import AccordionPage from './pages/AccordionPage';

function App() {
  return (
    <main>
      <NavBar />
      <section>
      <AccordionPage />


        {/* passing a function as children to a function component allows the parent to customize how its children are rendered */}
        <SearchableList
          items={PLACES}
          keyFn={(item) => item.id}
          label='Search the World'
        >
          {(item) => <Place {...item} />}
        </SearchableList>

        <SearchableList
          items={SOLARSYSTEM}
          keyFn={(item) => item.name} // key functions takes a different value for the key
          label='Search the Universe'
        >
          {/* with RENDER PROPS we can handle the data differently for other component functions */}
          {(item) => <SolarSystem item={item} />}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
