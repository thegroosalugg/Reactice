import classes from "./EventItem.module.css";
import { useParams, useLoaderData } from "react-router-dom";

function EventItem() {
  const { eventId } = useParams();
  const { events } = useLoaderData(); // response data is an object with an events key

  console.log("Child:", events);

  const event = events.find((event) => event.id === eventId);

  function startDeleteHandler() {
    // ...
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
      <p>page ID: {eventId}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
