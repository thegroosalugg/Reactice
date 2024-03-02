import classes from "./EventItem.module.css";
import { useParams, useLoaderData, json, Link } from "react-router-dom";

export default function EventItem() {
  const { eventIdFromRouter } = useParams();
  const { event } = useLoaderData(); // response data is an object with an event key

  console.log("Child:", event);

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
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export async function loadEvent({ request, params }) {
  const id = params.eventIdFromRouter;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    console.log(response)
    throw json(
      { title: "Huh?!", message: "You wanna go where now?" },
      { status: 500 }
      );
    } else {
      console.log(response)
      return response;
    }
}
