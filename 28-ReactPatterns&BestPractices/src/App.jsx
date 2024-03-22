import Accordion from './components/accordion/Accordion';
import AccordionItem from './components/accordion/AccordionItem';

function App() {
  return (
    <main>
      <section>
        <h2>React Patterns & Practices</h2>
        <Accordion className='accordion'>
        <AccordionItem id='1' className='accordion-item' title='Compound Components'>
            <article>
              <p>Compound Components are designed to specifically work together</p>
              <p>But they are not too useful on their own.</p>
            </article>
          </AccordionItem>
          <AccordionItem id='2' className='accordion-item' title='TBD'>
            <article>
              <p>More Coming Soon...</p>
              <p>...</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
