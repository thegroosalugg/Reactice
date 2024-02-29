import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* Link ensures we only render the selected component without restarting whole app and states */}
            <NavLink
              to="/" // isActive is a built-in react-router prop, it checks if the URL matches the current path and returns a boolean
              className={({ isActive }) => (isActive ? classes.active : null)}
              // end // using an 'end' prop ensures that the home path doesn't remain active from partial path matches, i.e. from children
              // however it is not required here as it does not remain active
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
