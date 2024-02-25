import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import Button from "../ui/Button";

export default function Cart({ toggleModal }) {
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
                <Button label="-" onClick={() => updateCart(meal, -1)} />
                <span>{meal.quantity}</span>
                <Button label="+" onClick={() => updateCart(meal, 1)} />
              </p>
            </li>
          ))}
        </ul>
      )}
      <p className="cart-total">${total(cart)}</p>
      <p className="modal-actions">
        <Button text label="Close" onClick={() => toggleModal()} />
        {cart.length > 0 && <Button label="Checkout" onClick={() => toggleModal("form")} />}
      </p>
    </div>
  );
}
