import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CartContextProvider from "./store/CartContext";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  const [modalState, setModalState] = useState({ open: false, type: "cart" });

  function openModal(type = "cart") {
    setModalState({ ...modalState, open: true, type });
  }

  function closeModal() {
    setModalState({ ...modalState, open: false });
  }

  useEffect(() => {
    console.log("Modal state:", modalState);
  }, [modalState]);

  return (
    <CartContextProvider>
      <Modal {...modalState} closeModal={closeModal}>
        {modalState.open && (
          <>
            {modalState.type === "cart" && <Cart openModal={openModal} closeModal={closeModal} />}
            {modalState.type === "form" && <CheckoutForm openModal={openModal} closeModal={closeModal}/>}
          </>
        )}
      </Modal>
      <Header openCart={openModal} />
      <Menu />
    </CartContextProvider>
  );
}

export default App;
