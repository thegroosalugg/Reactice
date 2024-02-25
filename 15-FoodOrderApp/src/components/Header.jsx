import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import logo from "../assets/logo.jpg";
import Button from "../ui/Button";

export default function Header({ openModal }) {
  const { cart } = useContext(CartContext);
  const cartTotal = cart.reduce((total, meal) => total + meal.quantity, 0)

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Laugh and grow fat</h1>
      </div>
      <Button text onClick={() => openModal("cart")} label={`Cart (${cartTotal})`} />
    </header>
  );
}
