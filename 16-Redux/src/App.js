import { Fragment } from "react";
import { useSelector } from "react-redux"; // import from react-dedux.
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const authorised = useSelector((state) => state.auth.authorised);

  return (
    <Fragment>
      <Header />
      {!authorised && <Auth />} {authorised && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
