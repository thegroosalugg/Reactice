import EventsList from "../components/EventsList";

export const EVENTS = [
  { id: "e1", title: "Jumping", date: "22-01-2024", image: "" },
  { id: "e2", title: "Swimming", date: "12-04-2028", image: "" },
  { id: "e3", title: "Crouching", date: "22-01-2024", image: "" },
  { id: "e4", title: "Running", date: "29-10-2034", image: "" }
];

function EventsPage() {
  return <EventsList events={EVENTS} />;
}

export default EventsPage;
