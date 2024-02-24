import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function CheckoutForm() {
  const { cart, total } = useContext(CartContext);

  function handleSubmit() {

  }

  return (
    <form className="control" onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <p>{total(cart)}</p>
      <input />
      <input />
      <input />
      <div className="control-row">
        <input />
        <input />
      </div>
    </form>
  )
}
