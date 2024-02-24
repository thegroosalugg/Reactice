import { useContext, useState } from "react";
import { CartContext } from "../store/CartContext";

export default function CheckoutForm({ closeModal }) {
  const { cart, total } = useContext(CartContext);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <form className="control" onSubmit={handleSubmit}>
      <h2>{formSubmitted ? "Success" : "Checkout"}</h2>
      <p>
        {formSubmitted
          ? "Order Successfully submitted.\n An Email confirmation has been sent"
          : `Total Amount: $${total(cart)}`}
      </p>
      {!formSubmitted && (
        <>
          <input />
          <input />
          <input />
          <div className="control-row">
            <input />
            <input />
          </div>
        </>
      )}
      <p className="modal-actions">
        <button
          className={formSubmitted ? "button" : "text-button"}
          onClick={closeModal}
        >
          {formSubmitted ? "Okay" : "Close"}
        </button>
        {!formSubmitted && (<button className="button" onClick={handleSubmit}>Submit</button>)}
      </p>
    </form>
  );
}
