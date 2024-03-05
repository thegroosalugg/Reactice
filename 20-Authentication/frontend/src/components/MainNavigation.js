import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';
import NavButton from '../ui/NavButton';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavButton path="/" label="Home" />
          <NavButton path="/events" />
          <NavButton path="/newsletter" />
          {/* loads login mode by default */}
          <NavButton path="/auth?mode=login" label="Authorisation" />
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
