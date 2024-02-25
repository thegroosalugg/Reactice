import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import Button from "../ui/Button";

export default function Meals({ meals, isLoading }) {
  const { addItem } = useContext(CartContext);

  return (
    <>
      {!isLoading && (
        <ul id="meals">
          {meals.map((meal) => (
            <li key={meal.id} className="meal-item">
              <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                  <h3>{meal.name}</h3>
                  <p className="meal-item-price">${meal.price}</p>
                  <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                  <Button label="Add to Cart" onClick={() => addItem(meal)} />
                </p>
              </article>
            </li>
          ))}
        </ul>
      )}
      {/* setting loading text below the UL lowers its position on the page without additional CSS */}
      {isLoading && <h2 className="center">Loading Menu...</h2>}
    </>
  );
}
