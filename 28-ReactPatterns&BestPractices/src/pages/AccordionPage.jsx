import Accordion from "../components/Accordion/Accordion";

export default function AccordionPage() {
  return (
    <>
      <h2>React Patterns & Practices</h2>
      <Accordion className='accordion'>

        <Accordion.item id='1' className='accordion-item'>
          <Accordion.title className='accordion-item-title'>
            Compound Components
          </Accordion.title>
          <Accordion.content className='accordion-item-content'>
            <article>
              <p>
                Compound Components are designed to specifically work together
              </p>
              <p>But they are not too useful on their own.</p>
            </article>
          </Accordion.content>
        </Accordion.item>

        <Accordion.item id='2' className='accordion-item'>
          <Accordion.title className='accordion-item-title'>
            The Accordion
          </Accordion.title>
          <Accordion.content className='accordion-item-content'>
            <article>
              <p>
                The Accordion is composed of a parent component function returng
                a &lt;ul&gt; element, that stores several other component
                functions as key values pairs, such as
                {` { item, title, content }`}. They operate with custom
                createContext hooks to share data.
              </p>
            </article>
          </Accordion.content>
        </Accordion.item>
      </Accordion>
    </>
  );
}
