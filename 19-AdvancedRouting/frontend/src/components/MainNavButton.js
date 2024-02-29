import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function NavButton({ path, name }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? classes.active : null)}
      >
        {name}
      </NavLink>
    </li>
  );
}
