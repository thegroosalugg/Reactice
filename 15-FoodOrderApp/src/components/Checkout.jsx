import { useContext, useState } from "react";
import { CartContext } from "../store/CartContext";
import { updateOrders } from "../https";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Checkout({ closeModal }) {
  const { cart, total, clearCart } = useContext(CartContext);
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try { // Call the updateOrders function with the cart and form data
      await updateOrders({ items: cart, customer: { ...data, total: total(cart) }});
      setFormSubmitted(true); // If updateOrders succeeds, set formSubmitted to true
      event.target.reset(); // Reset the form
      clearCart(); // empty cart function in context
    } catch (error) {
      console.error("Could not submit order", error.message);
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
          <Input label="Full Name" id="name" />
          <Input label="Email" id="email" type="email" />
          <Input label="Street" id="street" />
          <div className="control-row">
            <Input label="Postcode" id="postcode" />
            <Input label="City" id="city" />
          </div>
        </>
      )}
      <p className="modal-actions">
          <Button text={!formSubmitted} onClick={() => closeModal()} label={formSubmitted ? "Okay" : "Close"} />
        {!formSubmitted && <Button type="submit" label="Submit" />}
      </p>
    </form>
  );
}
