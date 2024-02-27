import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cartReducer";
import { useDispatch, useSelector } from "react-redux";

const Cart = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const total = items.reduce((total, { price, quantity }) => total + quantity * price, 0).toFixed(2);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.length <= 0 && <p>Cart is Empty. Buy more stuff</p>}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
      )}
      <div className={classes["cart-total"]}>
        <p>Total: ${total}</p>
        <button onClick={() => dispatch(cartActions.show(false))}>Close</button>
      </div>
    </Card>
  );
};

export default Cart;
