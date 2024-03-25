import Accordion from '../../components/Accordion/Accordion';

export default function PageTwo() {
  return (
    <Accordion.item id='2' className='accordion-item'>
      <Accordion.title className='accordion-item-title hover'>
        The Accordion Component
      </Accordion.title>
      <Accordion.content className='accordion-item-content'>
        <article>
          <p>
            The Accordion component is a classic example of using compound
            components in React.
          </p>
          <p>
            It consists of a parent component that manages the state of
            individual accordion items, and child components for the title and
            content of each item.
          </p>
        </article>
      </Accordion.content>
    </Accordion.item>
  );
}
