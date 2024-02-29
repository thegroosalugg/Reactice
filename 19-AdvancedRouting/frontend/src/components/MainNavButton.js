import { NavLink } from "react-router-dom";

export default function NavButton({ path, name }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? 'active' : null)}
      >
        {name}
      </NavLink>
    </li>
  );
}
