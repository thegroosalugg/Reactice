import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [avalablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    async function fetchPlaces() { // this is the correct way to use async/await in React's useEffect
      setIsFetching(true)
      const response = await fetch("http://localhost:3000/places"); // the code is more readable than the one below
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false)
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
