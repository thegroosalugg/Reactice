import Accordion from '../../components/Accordion/Accordion';

export default function PageFour() {
  return (
    <Accordion.item id='4' className='accordion-item'>
      <Accordion.title className='accordion-item-title hover'>
        Higher-Order Components (HOCs)
      </Accordion.title>
      <Accordion.content className='accordion-item-content'>
        <article>
          <p>
            Higher-Order Components are a design pattern in React that involves
            wrapping a component with another component to enhance its behavior.
          </p>
          <p>
            They are useful for adding cross-cutting concerns such as logging,
            authentication, or data fetching to multiple components.
          </p>
        </article>
      </Accordion.content>
    </Accordion.item>
  );
}
