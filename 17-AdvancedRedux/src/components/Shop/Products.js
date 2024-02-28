import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import products from "../Data/availableProducts";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
