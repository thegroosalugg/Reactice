import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], display: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    show(state, action) {
      state.display = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
