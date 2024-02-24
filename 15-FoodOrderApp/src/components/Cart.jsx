import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function Cart({ openModal, closeModal}) {
  const { cart, updateCart, total } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Your Cart 🛒</h2>
      {cart.length <= 0 && <p className="center">Your Cart is Empty 🤷🏼</p>}
      {cart.length > 0 && (
        <ul>
          {cart.map((meal) => (
            <li key={meal.id} className="cart-item">
              <p>{meal.name} — {meal.quantity} x {(meal.quantity * meal.price).toFixed(2)}</p>
              <p className="cart-item-actions">
                <button onClick={() => updateCart(meal, -1)}>-</button>
                <span>{meal.quantity}</span>
                <button  onClick={() => updateCart(meal, 1)}>+</button>
              </p>
            </li>
          ))}
        </ul>
      )}
      <p className="cart-total">${total(cart)}</p>
      <p className="modal-actions">
        <button className="text-button" onClick={closeModal}>Close</button>
        {cart.length > 0 && <button className="button" onClick={() => openModal("form")}>Checkout</button>}
      </p>
    </div>
  );
}
