import classes from "./MainNavigation.module.css";
import NavButton from "../ui/MainNavButton";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavButton path="/" name="Home" />
          <NavButton path="/events" name="Events" />
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
