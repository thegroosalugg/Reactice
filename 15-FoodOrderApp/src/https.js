export async function fetchAvailableMeals() {
  const response = await fetch("http://localhost:3000/meals"); // endpoint declared in the backend app.js which has a different name to the JSON filename
  const meals = await response.json();

  if (!response.ok) { // response.ok is built-in JS function. This throws new error if no response.
    throw new Error("Failed to fetch menu");
  }

  return meals; // Return the array of meals directly
}

export async function updateOrders({ items, customer }) {
  const response = await fetch("http://localhost:3000/orders", { // we can pass an object as a second argument to configure the request
    method: "POST", // HTTP method for handling request
    body: JSON.stringify({ order: { items, customer } }), // arrays are not accepted as data, so JSON stringify must be used
    headers: { 'content-type': 'application/json' } // informs the backend that JSON data is attached. Required for successful formatting
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Could not submit order");
  }

  return resData.message; // the response will contain an object with a message property in the dummy backend
}
