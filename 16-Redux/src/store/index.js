import { createStore } from "redux";

// redux store file. May be marked as depreciated but can still be used

// create a reducer function like in React. The state is given an initial value
const counterReducer = (state = { counter: 0, display: true }, action) => {
  if (action.type === "update") {
    // when this 'type" of action is called, it expects to get an 'amount' and changes the state by that amount
    return { ...state, counter: state.counter + action.amount };
  }

  if (action.type === "toggle") {
    return { ...state, display: !state.display }; // change true to false, false to true
  }

  return state;
};

// redux has only one store. It is then pointing at the function above
const store = createStore(counterReducer);

export default store;
