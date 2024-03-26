import { useEffect, useState } from 'react';

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1]; // only require set state function, so access it with [1] as 2nd element in useState array

  const dispatch = (actionId) => {
    // invokes the appropriate action function from the actions object based on the actionId, passing the current globalState as an argument
    const newState = actions[actionId](globalState);
    globalState = { ...globalState, ...newState }; // update state after action completed

    // ensures all app components that subscribed to the listeners are updated
    for (const listener of listeners) {
      // It calls every subscribed state changing function and passes globalState as an argument
      listener(globalState);
    }
  };

  useEffect(() => {
    // records state updating functions in the listeners array. Subscribes components to listen for state changes that affect them
    listeners.push(setState);

    return () => {
      listeners = listeners.filter((listener) => listener !== setState); // remove latest added listener when component dismounts
    };
  }, [setState]); // React guarantees that state setting functions will never change, so useEffect will not re-run

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState }; // updates global state
  }

  actions = { ...actions, ...userActions }; // adds user actions to the actions object
};
