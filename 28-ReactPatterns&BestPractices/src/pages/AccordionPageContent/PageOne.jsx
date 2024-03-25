import Accordion from '../../components/Accordion/Accordion';

export default function PageOne() {
  return (
    <Accordion.item id='1' className='accordion-item'>
      <Accordion.title className='accordion-item-title hover'>
        Compound Components
      </Accordion.title>
      <Accordion.content className='accordion-item-content'>
        <article>
          <p>
            Compound Components are a pattern in React that allows you to
            compose multiple components together to form a cohesive unit.
          </p>
          <p>
            They are especially useful for creating reusable and flexible
            components, as they encourage encapsulation and provide a clear
            interface for consuming components.
          </p>
        </article>
      </Accordion.content>
    </Accordion.item>
  );
}
