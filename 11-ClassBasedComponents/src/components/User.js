import classes from "./User.module.css";

// class based components require this import to access props
import { Component } from "react";

// component is then extended from class
class User extends Component {
  render() { // all class based components must be rendered with this built-in JS function
    return <li className={classes.user}>{this.props.name}</li>; // to access props, we must access this.props
  }
}

// this is function component is the same as the class based component above
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
