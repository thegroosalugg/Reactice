import logo from "../assets/logo.jpg"

export default function Header() {

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Laugh and grow fat</h1>
      </div>
      <button className="text-button">Cart</button>
    </header>
  );
}
