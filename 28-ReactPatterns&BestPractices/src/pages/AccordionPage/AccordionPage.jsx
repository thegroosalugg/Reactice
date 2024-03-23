import Accordion from '../../components/Accordion/Accordion';
import PageFour from './PageFour';
import PageOne from './PageOne';
import PageThree from './PageThree';
import PageTwo from './PageTwo';

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
