import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';
import NavButton from '../ui/NavButton';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavButton path="/" />
          <NavButton path="/events" />
          <NavButton path="/newsletter" />
          <NavButton path="/auth" />
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
