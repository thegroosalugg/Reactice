import { Link } from 'react-router-dom';
import classes from './EventsList.module.css';

export const EVENTS = [
  { id: "e1", title: "Jumping", date: "22-01-2024", image: "" },
  { id: "e2", title: "Swimming", date: "12-04-2028", image: "" },
  { id: "e3", title: "Crouching", date: "22-01-2024", image: "" },
  { id: "e4", title: "Running", date: "29-10-2034", image: "" }
];

function EventsList() {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {EVENTS.map((event) => (
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

export default EventsList;
