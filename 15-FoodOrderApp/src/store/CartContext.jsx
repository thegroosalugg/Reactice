import { createContext, useState } from 'react';

export const CartContext = createContext({ // creating default template provides better autocompletion in other components
  cart: [], // empty default value to match the useState inside the App component
  addItem: () => {}, // empty dummy arrow function set as context default value
  updateCart: () => {},
});

export default function CartContextProvider({ children }) {
  // Define your state variables here if needed
  const [cartState, setCartState] = useState([]);

  function handleAddItems() {

  }

  function handleUpdateItems() {

  }

  const contextValue = {
    cart: cartState,
    addItem: handleAddItems,
    updateCart: handleUpdateItems
  };

  return (
    // Return the CartContext.Provider with the value set to the context value
    <CartContext.Provider value={contextValue}>
      {/* Render the children */}
      {children}
    </CartContext.Provider>
  );
}
