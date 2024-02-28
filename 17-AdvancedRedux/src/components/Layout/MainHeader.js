import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useSelector, useDispatch } from "react-redux"; // import from react-dedux.
import { cartActions } from "../../store/cartSlice";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items)
  const total = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton total={total} onClick={() => dispatch(cartActions.show(true))} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
