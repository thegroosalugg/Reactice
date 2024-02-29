import classes from './EventsNavigation.module.css';
import NavButton from './MainNavButton';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavButton path ="/events" name="All Events" />
          <NavButton path ="/events/new" name="New Event" />
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
