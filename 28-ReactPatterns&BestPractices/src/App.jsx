import NavBar, { useNavContext } from './components/NavBar/NavBar';
import AccordionPage from './pages/AccordionPage/AccordionPage';
import SolarSystemPage from './pages/SolarSystemPage';
import PlacesPage from './pages/PlacesPage';

function App() {
  return (
    <main>
      <NavBar>
        {/* RENDER PROPS pass a function that returns renderable code. activeTab is passed from the NavBar component */}
        {(activeTab) => {
          return (
            <section>
              {activeTab === 'Accordion' && <AccordionPage />}
              {activeTab === 'Locations' && <PlacesPage />}
              {activeTab === 'Solar System' && <SolarSystemPage />}
            </section>
          );
        }}
      </NavBar>
    </main>
  );
}

export default App;
