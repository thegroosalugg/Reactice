import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], display: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
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
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
