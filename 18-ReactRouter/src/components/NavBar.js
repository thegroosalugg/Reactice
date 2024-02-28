import classes from "./MainNavigation.module.css"
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* Link ensures we only render the selected component without restarting whole app and states */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
