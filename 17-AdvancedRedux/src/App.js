import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/UI/Notification";
import Products from "./components/Shop/Products";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import { uiActions } from "./store/uiSlice";

let initialRender = true;

function App() {
  const showCart = useSelector((state) => state.cart.display);
  const cart = useSelector((state) => state.cart.items); // automatically subscribes to all changes to state
  const popup = useSelector((state) => state.ui.popup);
  const dispatch = useDispatch();

  useEffect(() => {
    // add reference /card.json to URL
    const sendCartData = async () => {

      dispatch( // update notification status
        uiActions.status({
          status: "pending",
          title: "Pending",
          message: "Sending request",
        })
      );

      const response = await fetch(
        "https://advanced-redux-ea825-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT", // will overwrite existing data with new data
          body: JSON.stringify(cart), // stringify the data to JSON format
        }
      );

      if (!response.ok) {
        throw new Error("Sending data failed");
      }

      dispatch( // no errors, update notification
        uiActions.status({
          status: "success",
          title: "Success",
          message: "Request sent",
        })
      );
    };

    if (initialRender) {
      initialRender = false; // this code will only run once
      return; // abort code and do not send request on initial render
    }

    sendCartData().catch(error => // call the function and call .catch on it then define any erros you might catch
      dispatch(
        uiActions.status({
          status: "error",
          title: "Error",
          message: "Failed to send request",
        })
      )
    ); // dispatch will not change, but is set as dependency to remove warnings
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
