import classes from "./Counter.module.css";
import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux"; // import from react-dedux.
// useSelector to grab any state data directly. useDispatch to call functions. connect to connect class based components with functions

// useDispatch dispatch action types to execute those functions
const Counter = () => {
  const counter = useSelector((state) => state.counter); // grab the counter value with redux. Automatic subscription ensures up to date values
  const display = useSelector((state) => state.display);
  const dispatch = useDispatch(); // initialise dispatch function

  const increaseCounter = () => {
    dispatch({ type: "update", amount: 1 }); // call dispatch action sending an object with an action type
  };

  const toggleCounterHandler = () => { // point to this function, or use an arrow function to call dispatch directly in event listener
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {display && <div className={classes.value}>{counter}</div>}
      <div>
                     {/* connect function to event listenders */}
        <button onClick={increaseCounter}>Plus</button>
        {/* reducer functions can be pointed to by being stored in functions, or executed as arrow functions directly in event listeners */}
        <button onClick={() => dispatch({ type: "update", amount: 5 })}>Plus 5</button>
        <button onClick={() => dispatch({ type: "update", amount: -1 })}>Minus</button>
      </div>
      <button onClick={() => dispatch({ type: 'toggle' })}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Below is how a Class Based Component uses Redux

// class Counter extends Component {
//   updateCounter = (amount) => {
//     this.props.update(amount);
//     console.log(this.props.counter, this.props.display, amount);
//   };

//   toggleCounter() {
//     this.props.toggle()
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         {this.props.display && <div className={classes.value}>{this.props.counter}</div>}
//         <div>
//           {/* connect function to event listenders */}
//           <button onClick={() => this.updateCounter(1)}>Plus</button>
//           <button onClick={() => this.updateCounter(5)}>Plus 5</button>
//           <button onClick={() => this.updateCounter(-1)}>Minus</button>
//         </div>
//         <button onClick={this.toggleCounter.bind(this)}>Toggle Counter</button>
//         {/* when pointing to a function, we need to bind this. If however calling the context function directly in the event listener, need to pass an arrow function */}
//         {/* <button onClick={() => this.props.toggle()}>Toggle Counter</button> */}
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   // class equivalent of useSelector. Grabs the wanted state value and subscribes to it
//   return { counter: state.counter, display: state.display };
// };

// const mapDispatchToProps = (dispatch) => {
//   // class equivalent of dispatch. Fetches functions
//   return {
//     update: (amount) => dispatch({ type: "update", amount }),
//     toggle: () => dispatch({ type: "toggle" }),
//   };
// };

// // Redux uses connect() to React. It takes 2 functions as arguments, one to show current state and one for dispatching functions
// // then the (Counter) component is executed as a 2nd function
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
