// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// redux store file. May be marked as depreciated but can still be used

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

export const counterActions = counterSlice.actions
// configureStore expects an object with a reducer key. In a large component store you store an object with your other reducers inside
// store states selected based on keys we name them, so in this store "state.counter.count" || "state.counter.display" || "state.counter.update()"
const store = configureStore({ reducer: { counter: counterSlice.reducer } });
export default store;

// original redux-react reducer
// create a reducer function like in React. The state is given an initial value
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "update") {
//     // when this 'type" of action is called, it expects to get an 'amount' and changes the state by that amount
//     return { ...state, counter: state.counter + action.amount };
//   }

//   if (action.type === "toggle") {
//     return { ...state, display: !state.display }; // change true to false, false to true
//   }

//   return state;
// };

// // redux has only one store. It is then pointing at the function above
// const store = createStore(counterReducer);

// export default store;
