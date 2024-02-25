import { useContext, useState } from "react";
import { CartContext } from "../store/CartContext";
import { updateOrders } from "../https";

export default function Checkout({ closeModal }) {
  const { cart, total } = useContext(CartContext);
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try { // Call the updateOrders function with the cart and form data
      await updateOrders({ items: cart, customer: { ...data, total: total(cart) }});
      setFormSubmitted(true); // If updateOrders succeeds, set formSubmitted to true
      event.target.reset(); // Reset the form
    } catch (error) {
      console.error("Failed to update orders:", error.message);
    }

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
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="street">Street</label>
            <input type="text" id="street" name="street" required />
          </div>
          <div className="control-row">
            <span>
              <label htmlFor="postcode">Postcode</label>
              <input type="text" id="postcode" name="postcode" required />
            </span>
            <span>
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </span>
          </div>
        </>
      )}
      <p className="modal-actions">
        <button
          className={formSubmitted ? "button" : "text-button"}
          onClick={() => closeModal(false)}
        >
          {formSubmitted ? "Okay" : "Close"}
        </button>
        {!formSubmitted && <button className="button" type="submit">Submit</button>}
      </p>
    </form>
  );
}
