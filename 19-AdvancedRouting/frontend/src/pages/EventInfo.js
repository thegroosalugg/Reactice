import EventItem from "../components/EventItem";
import { json, useRouteLoaderData, redirect } from "react-router-dom";

export default function EventInfoPage() {
  // const { event } = useLoaderData(); // response data is an object with an event key
  const { event } = useRouteLoaderData("event-info") // useLoaderData searches only current route, when accessing parent data, we useRouteLoaderData

  console.log("Child:", event);

  return <EventItem event={event} />
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
