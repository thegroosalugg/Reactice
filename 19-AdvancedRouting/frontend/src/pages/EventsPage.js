import EventsList from "../components/EventsList";

const EVENTS = [
  { title: "Jumping", date: "22-01-2024", image: "" },
  { title: "Swimming", date: "12-04-2028", image: "" },
  { title: "Crouching", date: "22-01-2024", image: "" },
  { title: "Running", date: "29-10-2034", image: "" }
];

function EventsPage() {
  return <EventsList events={EVENTS} />;
}

export default EventsPage;
