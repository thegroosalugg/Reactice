import { Link, json, useLoaderData } from "react-router-dom";
import classes from "./EventsList.module.css";

export default function EventsList() {
  const { events } = useLoaderData();

  console.log("Parent:", events);

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const fetchBackend = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch data..." }), {
    //   status: 500 }); // response thrown to error component if status detected
    throw json({ title: "Connection error", message: "Could not fetch data..." }, { status: 500 });
    // json is a router hook, allows to throw response without the need to parse on the receiving end
  } else {
    // const resData = await response.json();
    // return resData.events;
    return response; // can just return response directly in loaders
  }
};
