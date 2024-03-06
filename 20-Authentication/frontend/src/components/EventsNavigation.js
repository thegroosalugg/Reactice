import classes from './EventsNavigation.module.css';
import NavButton from '../ui/NavButton';
import { useRouteLoaderData } from 'react-router-dom';

function EventsNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavButton path='/events' label='All Events' cssClass={classes.active} />
          {token && <NavButton path='/events/new' label='New Event' cssClass={classes.active} />}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
