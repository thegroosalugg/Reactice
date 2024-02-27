import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux"; // import from react-dedux.
import { cartActions } from "../../store/cartReducer";

const MainHeader = (props) => {
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onClick={() => dispatch(cartActions.show(true))} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
