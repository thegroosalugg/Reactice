import Accordion from '../../components/Accordion/Accordion';

export default function PageThree() {
  return (
    <Accordion.item id='3' className='accordion-item'>
      <Accordion.title className='accordion-item-title hover'>
        Render Props
      </Accordion.title>
      <Accordion.content className='accordion-item-content'>
        <article>
          <p>
            Render Props is another powerful pattern in React for creating
            reusable components.
          </p>
          <p>
            It involves passing a function as a prop to a component, which
            allows the component to render content based on the logic defined in
            the function.
          </p>
        </article>
      </Accordion.content>
    </Accordion.item>
  );
}
