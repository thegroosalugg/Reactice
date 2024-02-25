import { createStore } from "redux";

// redux store file. May be marked as depreciated but can still be used

// create a reducer function like in React. The state is given an initial value
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "plus") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "minus") {
    return { counter: state.counter - 1 };
  }

  return state;
};

// redux has only one store. It is then pointing at the function above
const store = createStore(counterReducer);

export default store;
