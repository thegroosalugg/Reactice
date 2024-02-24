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
          <div className="control">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" name="full-name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="street">Street</label>
            <input type="text" id="street" name="street" required />
          </div>
          <div className="control-row">
            <span>
              <label htmlFor="postcode">Postcode</label>
              <input />
            </span>
            <span>
              <label htmlFor="city">City</label>
              <input />
            </span>
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
