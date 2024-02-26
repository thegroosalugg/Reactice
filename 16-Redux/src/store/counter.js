import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, display: true };

// createSlice from Redux Toolkit
const counterSlice = createSlice({
  name: "counter", // name required
  initialState,
  reducers: {
    // in create slice, we can manipulate the state directly as a copy will be made to ensure it remains inmutable
    update(state, action) {
      state.count += action.payload; // redux sets the value data we obtain as payload, it cannot be renamed
    },
    toggle(state) {
      state.display = !state.display;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer; // only need to export the reducer to set the key value in configureStore
