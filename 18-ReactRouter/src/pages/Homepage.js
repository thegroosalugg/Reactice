import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <p><Link to="/products">Products</Link></p>
    </div>
  );
};

export default Homepage
