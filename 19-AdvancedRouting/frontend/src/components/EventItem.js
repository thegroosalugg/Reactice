import classes from "./EventItem.module.css";
import { useParams, useLoaderData, json } from "react-router-dom";

export default function EventItem() {
  const { eventIdFromRouter } = useParams();
  const { events } = useLoaderData(); // response data is an object with an events key

  console.log("Child:", events);

  const event = events.find((event) => event.id === eventIdFromRouter);

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
      <p>page ID: {eventIdFromRouter}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

// can't get this to work yet
export async function loadEvent(request, params) {
  const id = params.eventIdFromRouter

  const response = await fetch("http://localhost:8080/events" + id)

  if (!response.ok) {
    throw json({ title: "Huh?!", message: "You wanna go where now?" }, { status: 500 });
  } else {
    return response;
  }
}
