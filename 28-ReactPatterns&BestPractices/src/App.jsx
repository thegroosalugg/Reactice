import NavBar from './components/NavBar/NavBar';
import AccordionPage from './pages/AccordionPage';
import SolarSystemPage from './pages/SolarSystemPage';
import PlacesPage from './pages/PlacesPage';

function App() {
  return (
    <main>
      <NavBar />
      <section>
        <AccordionPage />
        <SolarSystemPage />
        <PlacesPage />
      </section>
    </main>
  );
}

export default App;
