import { useAccordionContext } from './Accordion';

export default function AccordionItem({ id, className, title, children }) {
  const { openItemId, openItem, closeItem } = useAccordionContext();

  const isOpen = openItemId === id ? 'open' : null;

  console.log('[id]:', id, '\n', '[isOpen]:', isOpen, '\n', '[openItemId]:', openItemId)

  // the accordion item is rendered multiple times inside the accordion. So even though we click on one item...
  // ...every single item will execute this function and run the if/else check, thus closing all the accordions...
  // ...except the one that was clicked. And the one that was clicked will pass the ID and change the state
  function handleClick() {
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }

  return (
    <li className={className}>
      <h3 onClick={handleClick}>{title}</h3>
      <div className={`accordion-item-content ${isOpen}`}>{children}</div>
    </li>
  );
}
