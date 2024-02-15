export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places"); // the code is more readable than the one below
  const resData = await response.json();

  if (!response.ok) {
    // response.ok is built-in JS function. This throws new error if no response.
    throw new Error("Failed to fetch places"); // this will not be seen in the UI but serves as a mechanism for signaling errors within the code flow.
  }

  return resData.places;
}
