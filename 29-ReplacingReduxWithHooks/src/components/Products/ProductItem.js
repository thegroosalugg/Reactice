import './ProductItem.css';
import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';

const ProductItem = (props) => {
  const dispatch = useStore()[1]; // only dispatch required, so 2nd item from array

  const toggleFavHandler = () => {
    dispatch('faveItem', props.id); // dispatch takes 2 arguments, the identifier key as a string, then the product ID passed to this component
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className='product-item'>
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
