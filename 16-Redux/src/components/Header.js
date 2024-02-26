import { authActions } from "../store";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux"; // import from react-dedux.

const Header = () => {
  const authorised = useSelector((state) => state.auth.authorised);
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authorised && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={() => dispatch(authActions.toggle(false))}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
