import classes from "./MainNavigation.module.css";
import NavButton from "../ui/MainNavButton";
import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavButton path="/" name="Home" />
          <NavButton path="/events" name="Events" />
          <NavButton path="/newsletter" name="Newsletter" />
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
