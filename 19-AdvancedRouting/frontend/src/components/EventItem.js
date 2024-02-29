import classes from './EventItem.module.css';
import { useParams } from 'react-router-dom';
import { EVENTS } from '../pages/Events';

function EventItem() {
  const { eventId } = useParams();

  const event = EVENTS.find((event) => event.id === eventId);

  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <p>{eventId}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
