import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      {/* Link ensures we only render the selected component without restarting whole app and states */}
      <p><Link to="/">Home</Link></p>
    </div>
  );
};

export default Products
