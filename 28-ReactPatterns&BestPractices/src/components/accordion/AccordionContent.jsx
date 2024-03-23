import { useAccordionContext } from './Accordion';

export default function AccordionContent({ id, className, children }) {
  const { openItemId } = useAccordionContext();

  const status = openItemId === id ? 'open' : 'close';

  console.log('[id]:', id, '\n', '[status]:', status, '\n', '[openItemId]:', openItemId)

  return (
      <div className={`${className} ${status}`}>{children}</div>
  );
}
