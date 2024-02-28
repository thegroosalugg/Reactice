import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

const CartItem = (props) => {
  const { id, title, quantity, price } = props; // Max's code uses destructing, so I went with it and spread the item as a prop
  const dispatch = useDispatch()

  const handleUpdateItem = (id, amount) => { // only ID is required to locate item, other values are not needed
    dispatch(cartActions.updateItem({ id, amount })); // helper function required with redux for shorter code, so I can specify the amount via an argument
  }; // redux only allows 1 argument as payload, hence for additional values we need to contruct an object and pass it as an argument...
  // ...the reducer should expect same keys as we pass

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${(price * quantity).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          {/* call Redux function via helper function. Then we pass the ID required to locate item and the quantity change in order to construct a new object */}
          <button onClick={() => handleUpdateItem(id, -1)}>-</button>
          <button onClick={() => handleUpdateItem(id, 1)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
