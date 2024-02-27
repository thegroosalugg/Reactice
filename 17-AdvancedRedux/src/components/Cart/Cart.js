import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { cartActions } from '../../store/cartReducer';
import { useDispatch } from 'react-redux';

const Cart = (props) => {
  const dispatch = useDispatch();

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
      <button onClick={() => dispatch(cartActions.show(false))}>Close</button>
    </Card>
  );
};

export default Cart;
