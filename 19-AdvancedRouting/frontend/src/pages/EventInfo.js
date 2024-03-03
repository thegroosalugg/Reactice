import EventItem from "../components/EventItem";
import {
  json,
  useRouteLoaderData,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import { loadEvents } from "./Events";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventInfoPage() {
  // const { event } = useLoaderData(); // response data is an object with an event key
  const { event, events } = useRouteLoaderData("event-info"); // useLoaderData searches only current route, when accessing parent data, we useRouteLoaderData

  console.log("EventsINFOpage, Promise:", event);

  return (
    // each component function awaiting data needs its own Suspence/Await wrappers
    <>
      <Suspense fallback={<p>Awaiting Event info</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading events...</p>}>
        <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    console.log("Load Event via ID, response NOT ok:", response);
    throw json(
      { title: "Huh?!", message: "You wanna go where now?" }, { status: 500 }
    );
  } else {
    console.log("Load Event via ID, response A-ok", response);
    // return response; // have to use below syntax when using defer
    const resData = await response.json();
    return resData.event;
  }
}

export async function loader({ request, params }) {
  const id = params.eventIdFromRouter;

  return defer({
    event: loadEvent(id),
    events: loadEvents(), // imported from Events.js, same as above function except loads all events
  });
}

export async function action({ request, params }) {
  const id = params.eventIdFromRouter;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  }); // configuration extracts method from useSubmit above

  if (!response.ok) {
    throw json(
      { title: "Undeletable", message: "The file you tried to erase grows stronger" }, { status: 500 }
    );
  }
  return redirect("/events");
}
