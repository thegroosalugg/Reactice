import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../../../08-SideEffects/src/loc.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [avalablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlaces() { // this is the correct way to use async/await in React's useEffect
      setIsFetching(true); // fetching data dynamic text displays

      try { // try catch wraps code that could cause an error to ensure the app does not crash
        const response = await fetch("http://localhost:3000/places"); // the code is more readable than the one below
        const resData = await response.json();

        if (!response.ok) {
          // response.ok is built-in JS function. This throws new error if no response.
          throw new Error("Failed to fetch places"); // this will not be seen in the UI but serves as a mechanism for signaling errors within the code flow.
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            resData.places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false); // location fetched, fallback text disappears
        });
      } catch (error) {
        setError({ message: error.message || "Could not fetch places" }); // if the error state has already been set, use previous state, or initiate new error message
      }
      setIsFetching(false); // if error caught, fallback text also disappears. State needs to be set twice in either circumstance
    }

    fetchPlaces();
  }, []);

  // original method pre-async
  // useEffect(() => {
  //   fetch("http://localhost:3000/places") // Sending a GET request to the specified URL
  //     .then((response) => {               // Handling the response from the fetch request
  //       return response.json();           // Parsing the response body as JSON
  //     })
  //     .then((resData) => {                  // Handling the JSON data extracted from the response
  //       setAvailablePlaces(resData.places); // Updating the state with the fetched places data
  //     });
  // }, []); // Dependency array is empty, indicating this effect runs only once on component mount

  if (error) {
    return (
      <Error
        title={"Oopsy Daily, looks like there's an error"}
        message={error.message}
      />
    );
  }

  return (
    <Places
      title="Available Places"
      places={avalablePlaces}
      isLoading={isFetching}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
