import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import Products from "./components/Shop/Products";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import { fetchCartData, sendCartData } from "./store/cartRequests";

let initialRender = true;

function App() {
  const { display, mounted, items } = useSelector((state) => state.cart);
  const popup = useSelector((state) => state.ui.popup);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initialRender) {
      initialRender = false; // this code will only run once
      return; // abort code and do not send request on initial render
    }

    if (mounted) {
      dispatch(sendCartData(items));
    }
    // dispatch will not change, but is set as dependency to remove warnings
  }, [items, mounted, dispatch]); // request sent each time cart state changes

  return (
    <Fragment>
      {popup && <Notification {...popup} />}
      <Layout>
        {display && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
