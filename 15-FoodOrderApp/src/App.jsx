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

  function handleAddItems(meal) {
    const itemIndex = cartState.findIndex((cartItem) => cartItem.id === meal.id); // returns existing item's index or -1

    if (itemIndex !== -1) { // if item already exists, its index will not be -1 and quantity is updated
      const updatedCart = [...cartState];
      updatedCart[itemIndex].quantity += 1;
      setCartState(updatedCart);
    } else { // else the index is -1 and item is added to array
      setCartState((prevCart) => [...prevCart, { ...meal, quantity: 1 }]);
    }
  }

  console.log(cartState);

  function handleUpdateItems() {}

  return (
    <>
      <Modal open={modalState} closeModal={closeModal}>
        {cartState.length <= 0 && <h2>Your Cart is Empty</h2>}
      </Modal>
      <Header openCart={openModal} />
      <Menu onAdd={handleAddItems} />
    </>
  );
}

export default App;
