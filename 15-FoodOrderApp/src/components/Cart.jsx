import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function Cart({ closeModal }) {
  const { cart } = useContext(CartContext);
  const cartTotal = cart.map((meal) => meal.quantity * meal.price).reduce((acc, curr) => acc + curr, 0).toFixed(2)

  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>
      {cart.length <= 0 && <p>Your Cart is Empty 🤷🏼</p>}
      {cart.length > 0 && (
        <ul>
          {cart.map((meal) => (
            <li key={meal.id} className="cart-item">
              <p>{meal.name} — {meal.quantity} x ${(meal.quantity * meal.price).toFixed(2)}</p>
              <p className="cart-item-actions">
                <button>-</button>
                <span>{meal.quantity}</span>
                <button>+</button>
              </p>
            </li>
          ))}
        </ul>
      )}
      <p className="cart-total">
        💲{cartTotal}
      </p>
      <p className="modal-actions">
        <button className="text-button" onClick={closeModal}>Close</button>
        <button className="button">Checkout</button>
      </p>
    </div>
  );
}
