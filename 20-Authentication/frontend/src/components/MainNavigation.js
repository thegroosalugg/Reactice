import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';
import NavButton from '../ui/NavButton';
import { Form, useRouteLoaderData } from 'react-router-dom';

function MainNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavButton path='/' label='Home' cssClass={classes.active} />
          <NavButton path='/events' cssClass={classes.active} />
          <NavButton path='/newsletter' cssClass={classes.active} />
          {/* loads login mode by default */}
          {!token && <NavButton path='/auth?mode=login' label='Authentication' cssClass={classes.active} />}
          {token && <li>
            <Form action='/logout' method='post'>
              <button className={classes.button}>Logout</button>
            </Form>
          </li>}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
