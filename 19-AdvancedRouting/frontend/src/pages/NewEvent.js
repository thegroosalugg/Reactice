import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
  return <EventForm />;
}

export async function sendData({ request, params }) {
  const data = await request.formData(); // used for processing the response of a fetch request, if the expected data comes from a form
  const eventData = { // construct a new object and use .get and point to the input field names to extract the data
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description")
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // ensure data handled correctly
    body: JSON.stringify(eventData)
  })

  if (!response.ok) {
    throw json({title: "Updating failed", message: "Didn't manage to upload data"}, {status: 500})
  }

  return redirect("/events") // react router hook that will redirect to specified path on completopn, i.e. away from form page
}
