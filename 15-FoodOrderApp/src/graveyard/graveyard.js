// alternative function for adding items to cart and updating quantity
function handleAddItems(meal) {
  const existingItem = cartState.find((cartItem) => cartItem.id === meal.id);

  if (existingItem) {
    // If the item is already in the cart, increment its quantity
    const updatedCart = cartState.map((cartItem) => cartItem.id === meal.id && { ...cartItem, quantity: cartItem.quantity + 1 });
    setCartState(updatedCart);
  } else {
    // If the item is not in the cart, add it with a quantity of 1
    setCartState((prevCart) => [...prevCart, { ...meal, quantity: 1 }]);
  }
}
