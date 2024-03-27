import './Products.css';
import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hooks-store/store';

const Products = (props) => {
  const [state, dispatch] = useStore(); // store returns a state and dispatch, we don't need dispatch, but is simply displayed how it would look
  // const state = useStore()[0]; // can also be accessed this way: first element from the array

  return (
    <ul className='products-list'>
      {state.products.map((prod) => (
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
