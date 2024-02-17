export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places"); // the code is more readable than the original commented code in AvailablePlaces.jsx
  const resData = await response.json();

  if (!response.ok) {
    // response.ok is built-in JS function. This throws new error if no response.
    throw new Error("Failed to fetch places"); // this will not be seen in the UI but serves as a mechanism for signaling errors within the code flow.
  }

  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Could not fetch user places");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", { // we can pass an object as a second argument to configure the request
    method: "PUT", // HTTP method for handling request
    body: JSON.stringify({ places }), // arrays are not accepted as data, so JSON stringify must be used
    // it must also receive an object, and as the key value pair matches, only 'places' is set instead of '{ places: places }'
    headers: { 'content-type': 'application/json' } // informs the backend that JSON data is attached. Required for successful formatting
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data");
  }

  return resData.message; // the response will contain an object with a message property in the dummy backend
}
