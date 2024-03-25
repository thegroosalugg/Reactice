import Accordion from '../components/Accordion/Accordion';
import PageFour from './AccordionPageContent/PageFour';
import PageOne from './AccordionPageContent/PageOne';
import PageThree from './AccordionPageContent/PageThree';
import PageTwo from './AccordionPageContent/PageTwo';

export default function AccordionPage() {
  return (
    <Accordion className='accordion'>
      <h2>React Patterns & Practices</h2>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </Accordion>
  );
}
