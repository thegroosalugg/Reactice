import logo from "../assets/logo.jpg";

export default function Header({ openCart }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Laugh and grow fat</h1>
      </div>
      <button className="text-button" onClick={openCart}>Cart</button>
    </header>
  );
}
