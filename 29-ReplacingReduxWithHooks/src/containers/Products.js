import { useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { ProductContext } from '../context (notUsed)/product-context';

const Products = (props) => {
  const { products } = useContext(ProductContext);

  return (
    <ul className='products-list'>
      {products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
