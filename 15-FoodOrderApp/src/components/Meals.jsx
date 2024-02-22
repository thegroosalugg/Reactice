import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function Meals({ meals, isLoading }) {
  const { addItem, cart } = useContext(CartContext)

  console.log("meals", cart)

  return (
    <>
      <ul id="meals">
        {!isLoading &&
          meals.map((meal) => (
            <li key={meal.id} className="meal-item">
              <article>
                <img
                  src={`http://localhost:3000/${meal.image}`}
                  alt={meal.name}
                />
                <div>
                  <h3>{meal.name}</h3>
                  <p className="meal-item-price">${meal.price}</p>
                  <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                  <button className="button" onClick={() => addItem(meal)}>Add to Card</button>
                </p>
              </article>
            </li>
          ))}
      </ul>
      {/* setting loading text below the UL lowers its position on the page without additional CSS */}
      {isLoading && <h2 className="loading">Loading Menu...</h2>}
    </>
  );
}
