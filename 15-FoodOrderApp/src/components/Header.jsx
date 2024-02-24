import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import logo from "../assets/logo.jpg";

export default function Header({ openCart }) {
  const { cart } = useContext(CartContext);
  const cartTotal = cart.reduce((total, meal) => total + meal.quantity, 0)

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Laugh and grow fat</h1>
      </div>
      <button className="text-button" onClick={() => openCart()}>Cart ({cartTotal})</button>
    </header>
  );
}
