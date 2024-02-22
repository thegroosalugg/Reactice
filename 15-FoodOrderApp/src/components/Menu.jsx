import { useState, useEffect } from "react";
import { fetchAvailableMeals } from "../https";
import Meals from "./Meals";

export default function Menu({ onAdd }) {
  const [fetchedMeals, setFetchedMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMeals() { // this is the correct way to use async/await in React's useEffect
      setIsFetching(true); // fetching data dynamic text displays

      try { // try catch wraps code that could cause an error to ensure the app does not crash
        const meals = await fetchAvailableMeals(); // fetch function declared inside http.js
        setFetchedMeals(meals);
      } catch (error) {
        setError({ message: error.message || "Menu loading failed" }); // if the error state has already been set, use previous state, or initiate new error message
      }
      setIsFetching(false); // if error caught, fallback text also disappears. State needs to be set twice in either circumstance
    }

    fetchMeals();
  }, []);

  if (error) {
    return <h2 className="loading">404 Failed to load menu</h2>
  }

  return <Meals meals={fetchedMeals} isLoading={isFetching} onAdd={onAdd} />;
}
