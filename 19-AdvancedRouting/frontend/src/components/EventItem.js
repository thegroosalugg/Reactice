import classes from "./EventItem.module.css";
import { useParams, Link, useSubmit } from "react-router-dom";

export default function EventItem({ event }) {
  const { eventIdFromRouter } = useParams();
  const submit = useSubmit();

  function startDeleteHandler() {
    const goForth = window.confirm("Are you positive?") // built-in browser confirmation pop up

    if (goForth) { // first argument is data to be submitted, in this case, not required
      submit(null, { method: 'delete' }); // method sent to deleteEvent function for configuration
    }
  }

  return (
    <article className={classes.event}>
      {event && (
        <>
          <img src={event.image} alt={event.title} />
          <h1>{event.title}</h1>
          <time>{event.date}</time>
          <p>{event.description}</p>
        </>
      )}
      <p>page ID: {eventIdFromRouter}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
