import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CartContextProvider from "./store/CartContext";

function App() {
  const [modalState, setModalState] = useState(false);

  function openModal() {
    setModalState(true);
  }

  function closeModal() {
    setModalState(false);
  }

  console.log("app")

  return (
    <CartContextProvider>
      <Modal open={modalState} closeModal={closeModal}>
        {/* {cartState.length <= 0 && <h2>Your Cart is Empty</h2>} */}
      </Modal>
      <Header openCart={openModal} />
      <Menu />
    </CartContextProvider>
  );
}

export default App;
