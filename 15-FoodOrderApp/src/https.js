export async function fetchAvailableMeals() {
  const response = await fetch("http://localhost:3000/meals"); // endpoint declared in the backend app.js which has a different name to the JSON filename
  const meals = await response.json();

  if (!response.ok) { // response.ok is built-in JS function. This throws new error if no response.
    throw new Error("Failed to fetch data");
  }

  return meals; // Return the array of meals directly
}
