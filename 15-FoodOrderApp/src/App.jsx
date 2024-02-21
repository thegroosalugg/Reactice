import { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [cartState, setCartState] = useState([]);
  const [modalState, setModalState] = useState(false);

  function openModal() {
    setModalState(true);
  }

  function closeModal() {
    setModalState(false);
  }

  return (
    <>
      <Modal open={modalState} closeModal={closeModal}>
        {cartState.length <= 0 && <h2>Your Cart is Empty</h2>}
      </Modal>
      <Header openCart={openModal} />
      <Menu />
    </>
  );
}

export default App;
