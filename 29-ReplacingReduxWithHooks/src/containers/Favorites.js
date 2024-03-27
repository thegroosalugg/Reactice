import './Products.css';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import { useStore } from '../hooks-store/store';

const Favorites = () => {
  const state = useStore()[0]; // dispatch not required, access only 1st element from the array

  const favoriteProducts = state.products.filter((p) => p.isFavorite);

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
