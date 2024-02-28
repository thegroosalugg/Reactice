import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

// action creator
export const sendCartData = (cart) => {
  // is a function that stores another function, which can be async
  return async (dispatch) => {
    dispatch(
      // update notification status
      uiActions.status({
        status: "pending",
        title: "Pending",
        message: "Sending request",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        // add reference /card.json to URL
        "https://advanced-redux-ea825-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT", // will overwrite existing data with new data
          body: JSON.stringify(cart), // stringify the data to JSON format
        }
      );

      if (!response.ok) {
        throw new Error("Sending data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        // no errors, update notification
        uiActions.status({
          status: "success",
          title: "Success",
          message: "Request sent",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.status({
          status: "error",
          title: "Error",
          message: "Failed to send request",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://advanced-redux-ea825-default-rtdb.firebaseio.com/cart.json") // GET request by default

      if (!response.ok) {
        throw new Error("Fetching data failed");
      }

      const data = await response.json();
      return data;
    };

    try {
      const retrieveCart = await fetchData();
      dispatch(cartActions.loadCart(retrieveCart || [])) // if cart is empty, retrievedCart returns undefined, if so, set cart to empty array
    } catch (error) {
      dispatch(
        uiActions.status({
          status: "error",
          title: "Error",
          message: "Failed to fetch cart",
        })
      );
    }
  };
};
