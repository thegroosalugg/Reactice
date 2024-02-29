import { useParams, useNavigate, Link } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams(); // params will grab the dynamic path
  const navigate = useNavigate(); // can be called to specific pages, i.e. set a timer to redirect

  return (
    <>
      <h1>Details Page</h1>
      {/* custom path route must match the route set in App's router */}
      <p>params path id: {params.customPath}</p>
      {/* .. is a relative path and as such returns to the routed parent which is the root homepage */}
      {/* setting relative="path" changes its behaviour by deleting the latest entry in the path (ID) i.e. /products/id => /products */}
      <Link to=".." relative="path">Go Back Link</Link>
      <button onClick={() => navigate("/products")}>Go Back Button</button>
    </>
  );
}
