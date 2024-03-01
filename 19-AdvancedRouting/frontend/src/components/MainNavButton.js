import { NavLink } from "react-router-dom";

export default function NavButton({ path, name }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? 'active' : null)}
        end // prevents root events path navigation from being perpetually active
      >
        {name}
      </NavLink>
    </li>
  );
}
