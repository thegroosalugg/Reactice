import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import Products from "./components/Shop/Products";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import { sendCartData } from "./store/cartSlice";

let initialRender = true;

function App() {
  const showCart = useSelector((state) => state.cart.display);
  const cart = useSelector((state) => state.cart.items); // automatically subscribes to all changes to state
  const popup = useSelector((state) => state.ui.popup);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialRender) {
      initialRender = false; // this code will only run once
      return; // abort code and do not send request on initial render
    }

    dispatch(sendCartData(cart));
    // dispatch will not change, but is set as dependency to remove warnings
  }, [cart, dispatch]); // request sent each time cart state changes

  return (
    <Fragment>
      {popup && <Notification {...popup} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
