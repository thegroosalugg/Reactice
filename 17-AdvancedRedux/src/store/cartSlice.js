import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";

const initialState = { items: [], display: false };

const cartSlice = createSlice({
  name: "cart",
  initialState, // key value pairs automatically match. Redux Toolkit this key MUST be named 'initialState
  reducers: {
    show(state, action) {
      state.display = action.payload;
    },

    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
    },

    updateItem(state, action) {
      const { id, amount } = action.payload; // only item ID is needed to find item, amount payload created by event listener and can be negative
      const index = state.items.findIndex((item) => item.id === id); // locate item's index
      state.items[index].quantity += amount; // access state's item array via the found index to find the matched item and modify it's quantity

      if (state.items[index].quantity <= 0) { // quantity is zero, locate item in array again via index and use splice to delete the item from the items state
        state.items.splice(index, 1);
      }
    },
  },
});

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

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
