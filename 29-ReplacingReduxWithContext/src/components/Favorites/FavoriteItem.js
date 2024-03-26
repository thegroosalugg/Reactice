import './FavoriteItem.css';
import Card from '../UI/Card';

const FavoriteItem = ({ title, description }) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem;
