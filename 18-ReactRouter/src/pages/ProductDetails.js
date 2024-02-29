import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams(); // params will grab the dynamic path
  const navigate = useNavigate(); // can be called to specific pages, i.e. set a timer to redirect

  return (
    <>
      <h1>Details Page</h1>
      {/* custom path route must match the route set in App's router */}
      <p>params path id: {params.customPath}</p>
      <button onClick={() => navigate("/products")}>Back to Products</button>
    </>
  );
}
