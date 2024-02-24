import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function CheckoutForm({ openModal, closeModal}) {
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
      <p className="modal-actions">
        <button className="text-button" onClick={closeModal}>Close</button>
        <button className="button" onClick={() => openModal("confirm")}>Submit</button>
      </p>
    </form>
  )
}
