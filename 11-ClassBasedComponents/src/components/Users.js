import { useState, Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  // "this" is required to access class methods or properties from anywhere inside of that class/ object.
  constructor() { // the constructor method is a special method in JS classes that is called when a new instance of the class is created
    super(); // In class components, when defining a constructor, you must call super() as the first statement within the constructor
    // This is necessary to initialize the parent class (i.e., Component) and bind the this keyword correctly.
    this.state = { showUsers: true }; // in class based components, state must be an object which holds all values
  } // state is always called this.state and this.setState, the names cannot be changed

  toggleUsersHandler() { // in setState will merge the prev and old state, any new values are updated and old values are kept
    this.setState((curState) => { // we can still use the toggle code to update state, but now it must return an object
      return { showUsers: !curState.showUsers };
    });
  }

  render() { // render must be used to return renderable JS code
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {/* functions need to be pointed to with this, and must also be bound to point to the correct function */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {/* state is now accessed with this.state and then the object keys */}
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// this is the functional component version of the class component above
// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState); // new functional state always overwrites the old. Old class based state merges the 2
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
