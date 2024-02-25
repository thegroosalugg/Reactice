import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CartContextProvider from "./store/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [modalState, setModalState] = useState();

  function toggleModal(type) {
    setModalState(type);
  }

  return (
    <CartContextProvider>
      <Modal open={modalState} closeModal={toggleModal}>
        {modalState === "cart" && <Cart toggleModal={toggleModal} />}
        {modalState === "form" && <Checkout closeModal={toggleModal} />}
      </Modal>
      <Header openModal={toggleModal} />
      <Menu />
    </CartContextProvider>
  );
}

export default App;
