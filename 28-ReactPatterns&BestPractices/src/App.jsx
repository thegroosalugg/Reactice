import Accordion from './components/accordion/Accordion';

function App() {
  return (
    <main>
      <section>
        <h2>React Patterns & Practices</h2>
        <Accordion className='accordion'>
        <Accordion.item id='1' className='accordion-item' title='Compound Components'>
            <article>
              <p>Compound Components are designed to specifically work together</p>
              <p>But they are not too useful on their own.</p>
            </article>
          </Accordion.item>
          <Accordion.item id='2' className='accordion-item' title='TBD'>
            <article>
              <p>More Coming Soon...</p>
              <p>...</p>
            </article>
          </Accordion.item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
