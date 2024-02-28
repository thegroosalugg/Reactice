import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav>
        <ul>
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
