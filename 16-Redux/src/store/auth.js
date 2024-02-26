import { createSlice } from "@reduxjs/toolkit";

const initialState = { authorised: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggle(state, action) {
      state.authorised = action.payload; // receives true or false as argument. Is used as validator triggered by event listeners
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer
