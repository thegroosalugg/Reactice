import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.display);
  const cart = useSelector((state) => state.items); // automatically subscribes to all changes to state

  useEffect(() => { // add reference /card.json to URL
    fetch('https://advanced-redux-ea825-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT', // will overwrite existing data with new data
      body: JSON.stringify(cart), // stringify the data to JSON format
    });
  }, [cart]); // request sent each time cart state changes

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
