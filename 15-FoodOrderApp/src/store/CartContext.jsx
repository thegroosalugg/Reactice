import { createContext, useState } from 'react';

export const CartContext = createContext({ // creating default template provides better autocompletion in other components
  cart: [], // empty default value to match the useState inside the App component
  addItem: () => {}, // empty dummy arrow function set as context default value
  updateCart: () => {},
  total: () => {},
  clearCart: () => {}
});

export default function CartContextProvider({ children }) {
  const [cartState, setCartState] = useState([]);

  function addItem(meal) {
    const itemIndex = cartState.findIndex((cartItem) => cartItem.id === meal.id); // returns existing item's index or -1

    if (itemIndex !== -1) { // if item already exists, its index will not be -1 and quantity is updated
      const updatedCart = [...cartState];
      updatedCart[itemIndex].quantity += 1;
      setCartState(updatedCart);
    } else { // else the index is -1 and item is added to array
      setCartState((prevCart) => [...prevCart, { ...meal, quantity: 1 }]);
    }
  }

  function updateCart(meal, quantity) {
    const itemIndex = cartState.findIndex((cartItem) => cartItem.id === meal.id);
    const updatedCart = [...cartState];

    updatedCart[itemIndex].quantity = Math.min(updatedCart[itemIndex].quantity + quantity, 9);

    if (updatedCart[itemIndex].quantity <= 0) {
      updatedCart.splice(itemIndex, 1);
    }

    setCartState(updatedCart);
  }

  function total(cart) {
    return cart.map((meal) => meal.quantity * meal.price).reduce((acc, curr) => acc + curr, 0).toFixed(2)
  }

  function clearCart() {
    setCartState([]);
  }

  const contextValue = {
    cart: cartState,
    addItem,
    updateCart,
    total,
    clearCart
  };

  return (
    // Return the CartContext.Provider with the value set to the context value
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}
