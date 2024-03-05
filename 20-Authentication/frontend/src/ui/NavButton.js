import { NavLink } from "react-router-dom";
import classes from '../components/MainNavigation.module.css';

export default function NavButton({ path, label }) {
  // less props to pass as path name matches label name, only need to format it
  const linkText = label ? label : path.charAt(1).toUpperCase() + path.slice(2)

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        end
      >
        {linkText}
      </NavLink>
    </li>
  );
}
