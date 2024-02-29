import { Link, useNavigate } from "react-router-dom";

const PRODUCTS = [
  { id: "20492", title: "Beer" },
  { id: "65464", title: "Bier" },
  { id: "efh44", title: "Beir" },
  { id: "vls5g", title: "Biir" },
];

const Products = () => {
  const navigate = useNavigate(); // can be called to specific pages, i.e. set a timer to redirect

  return (
    <div>
      <h1>Products</h1>
      {PRODUCTS.map((prod) => (
        <li key={prod.id}>
          {/* use interpolation to dynamically set custom paths for backend data rendered. I.e. existing path name with item's unique ID */}
          <Link to={`/products/${prod.id}`}>{prod.title}</Link>
        </li>
      ))}
      {/* button is redundant as you should use "Link". It only demonstrates how the navigate Hook works. It should be set to other events such as timeout */}
      <button onClick={() => navigate("/")}>Test Navigate</button>
    </div>
  );
};

export default Products;
