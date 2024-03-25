import { motion } from 'framer-motion';
import NavBar from './components/NavBar/NavBar';
import AccordionPage from './pages/AccordionPage/AccordionPage';
import SolarSystemPage from './pages/SolarSystemPage';
import PlacesPage from './pages/PlacesPage';

function App() {
  return (
    <main>
      <NavBar>
        {/* RENDER PROPS pass a function that returns renderable code. activeTab is passed from the NavBar component */}
        {(activeTab) => {
          const background =
            activeTab === 'Solar System'
              ? 'linear-gradient(to right, #050a18, #0c1225, #13203a, #1a2d50, #223a66, #29487d, #305694)'
              : '#151925';

          document.body.style.background = background; // dynamically inject app background based on activeTab

          return (
            <motion.section
              key={activeTab} // Ensure components are re-mounted when switching between tabs
              initial={{ opacity: 0, y: -30 }} // Initial animation when component mounts
              animate={{ opacity: 1, y: 0 }} // Animate opacity when component changes
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'Accordion' && <AccordionPage />}
              {activeTab === 'Locations' && <PlacesPage />}
              {activeTab === 'Solar System' && <SolarSystemPage />}
            </motion.section>
          );
        }}
      </NavBar>
    </main>
  );
}

export default App;
