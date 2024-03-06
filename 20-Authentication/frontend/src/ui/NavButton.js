import { NavLink } from "react-router-dom";

export default function NavButton({ path, label, cssClass }) {
  // less props to pass as path name matches label name, only need to format it
  const linkText = label ? label : path.charAt(1).toUpperCase() + path.slice(2)

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? cssClass : undefined)}
        end
      >
        {linkText}
      </NavLink>
    </li>
  );
}
