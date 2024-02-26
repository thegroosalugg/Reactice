// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

// redux store file. May be marked as depreciated but can still be used

// configureStore expects an object with a reducer key. In a large component store you store an object with your other reducers inside
// store states selected based on keys we name them, so in this store "state.counter.count" || "state.counter.display" || "state.counter.update()"
const store = configureStore({
  // configure multiple reducers and access them via state.reducerName
  reducer: { counter: counterSlice, auth: authSlice },
});         // reducers outsourced to separate files and are exported/import then set as reducers here
export default store;

// original redux-react reducer
// create a reducer function like in React. The state is given an initial value
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "update") {
//     // when this 'type" of action is called, it expects to get an 'amount' and changes the state by that amount
//     return { ...state, count: state.count + action.amount };
//   }

//   if (action.type === "toggle") {
//     return { ...state, display: !state.display }; // change true to false, false to true
//   }

//   return state;
// };

// // redux has only one store. It is then pointing at the function above
// const store = createStore(counterReducer);

// export default store;
