import './Products.css';
import { useContext } from 'react';
import { ProductContext } from '../context/product-context';
import FavoriteItem from '../components/Favorites/FavoriteItem';

const Favorites = () => {
  const { products } = useContext(ProductContext);

  const favoriteProducts = products.filter((p) => p.isFavorite);

  let content = <p className='placeholder'>Got no favorites yet!</p>;

  if (favoriteProducts.length > 0) {
    content = (
      <ul className='products-list'>
        {favoriteProducts.map(({ id, title, description }) => (
          <FavoriteItem
            key={id}
            id={id}
            title={title}
            description={description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
