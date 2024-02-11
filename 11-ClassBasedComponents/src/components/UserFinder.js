import { Fragment, useState, useEffect, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";


class UserFinder extends Component {
  static contextType = UsersContext; // static contextType can only be set once in class based components
  // its value is set to the context constant created in the store folder

  constructor() {
    super();
    this.state = { filteredUsers: [], searchTerm: "" };
  }

  componentDidMount() { // this will execute only once when app is rendered
    // send http request...
    this.setState({ filteredUsers: this.context.users }); // context is accessed using this.context and then any key values stored inside
  }

  componentDidUpdate(prevProps, prevState) { // lifecycle method provided by React
    // It is invoked immediately after updating occurs, but it is not invoked for the initial render
    //  This method receives two parameters: prevProps and prevState, which represent the previous props and state of the component
    if (prevState.searchTerm !== this.state.searchTerm) { // class based components cannot use hooks
      this.setState({  // Instead an if checks the prev search term was different to the current, and then executes the state update
        filteredUsers: this.context.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
