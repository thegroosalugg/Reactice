import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

export default function AccordionContent({ className, children }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();

  const status = openItemId === id ? 'open' : 'close';

  return (
      <div className={`${className} ${status}`}>{children}</div>
  );
}
