import { Await, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import { Suspense } from "react";

export default function EditEventPage() {
  const { event } = useRouteLoaderData("event-info");
  console.log("EDITeventspage, Promise:", event);

  return (
    // Await suspense is actually needed here. Since we are demonstating Defer in EventInfo and these components share loaders...
    // ... this changes the datatype of event to a promise, and it now also must be awaited here to resolve
    <Suspense>
      <Await resolve={event}>
        {(loadedEvent) => <EventForm event={loadedEvent} method="patch" />}
      </Await>
    </Suspense>
  );
}
