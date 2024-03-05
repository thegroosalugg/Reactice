import { NavLink } from "react-router-dom";
import classes from '../components/MainNavigation.module.css';

export default function NavButton({ path }) {
  // less props to pass as path name matches label name, only need to format it
  const label = path === "/" ? "Home" : path.charAt(1).toUpperCase() + path.slice(2)

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        {label}
      </NavLink>
    </li>
  );
}
