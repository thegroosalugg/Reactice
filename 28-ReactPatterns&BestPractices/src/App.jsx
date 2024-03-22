import Accordion from './components/accordion/Accordion';
import AccordionItem from './components/accordion/AccordionItem';

function App() {
  return (
    <main>
      <section>
        <h2>React Patterns & Practices</h2>
        <Accordion className='accordion'>
        <AccordionItem className='accordion-item' title='Compound Components'>
            <artic>
              <p>Compound Components are designed to specifically work together</p>
              <p>But they are not too useful on their own.</p>
            </artic>
          </AccordionItem>
          <AccordionItem className='accordion-item' title='TBD'>
            <artic>
              <p>More Coming Soon...</p>
              <p>...</p>
            </artic>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
