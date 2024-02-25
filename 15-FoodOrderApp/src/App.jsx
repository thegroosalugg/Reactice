import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Menu from "./components/Menu";
import CartContextProvider from "./store/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [modalState, setModalState] = useState({ open: false, type: "cart" });

  function togglenModal(boolean, type = "cart") {
    setModalState({ ...modalState, open: boolean, type });
  }


  useEffect(() => {
    console.log("Modal state:", modalState);
  }, [modalState]);

  return (
    <CartContextProvider>
      <Modal {...modalState} closeModal={togglenModal}>
        {modalState.open && (
          <>
            {modalState.type === "cart" && <Cart togglenModal={togglenModal} />}
            {modalState.type === "form" && <Checkout closeModal={togglenModal}/>}
          </>
        )}
      </Modal>
      <Header openModal={togglenModal} />
      <Menu />
    </CartContextProvider>
  );
}

export default App;
