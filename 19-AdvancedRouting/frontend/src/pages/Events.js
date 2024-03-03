import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

export default function EventsPage() {
  const { events } = useLoaderData();

  console.log("Parent:", events);

  return (
    // Suspense is a React (not ROuter) hook which must wrap Await and provides fallback data whilst the fetched data is awaited
    <Suspense fallback={<p>Loading events...</p>}>
      {/* Await will output the wrapped code once the awaited data is resolved */}
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch data..." }), {
    //   status: 500 }); // response thrown to error component if status detected
    throw json(
      { title: "Connection error", message: "Could not fetch data..." }, { status: 500 }
    );
    // json is a router hook, allows to throw response without the need to parse on the receiving end
  } else {
    const resData = await response.json();
    return resData.events;
    // return response; // can just return response directly in loaders. However must manually parse when using 'defer'
  }
};

export function loader() {
  // loadEvents() is executed(), not pointed to
  return defer({ events: loadEvents() }); // must pass an object as argument, the response.events will hold the events data
} // the object's value must be a promise, the awaited response in the async function
