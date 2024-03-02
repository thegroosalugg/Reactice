import classes from "./EventItem.module.css";
import { useParams, json, Link, useRouteLoaderData, redirect, useSubmit } from "react-router-dom";

export default function EventItem() {
  const { eventIdFromRouter } = useParams();
  // const { event } = useLoaderData(); // response data is an object with an event key
  const { event } = useRouteLoaderData("event-info") // useLoaderData searches only current route, when accessing parent data, we useRouteLoaderData
  const submit = useSubmit();

  console.log("Child:", event);

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

export async function deleteEvent({ request, params }) {
  const id = params.eventIdFromRouter;

  const response = await fetch("http://localhost:8080/events/" + id, { method: request.method }); // configuration extracts method from useSubmit above

  if (!response.ok) {
    throw json(
      { title: "Undeletable", message: "The file you tried to erase grows stronger" }, { status: 500 }
      );
    }
    return redirect("/events")
}
