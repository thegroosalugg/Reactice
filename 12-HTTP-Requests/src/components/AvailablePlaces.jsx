import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [avalablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/places") // Sending a GET request to the specified URL
      .then((response) => {               // Handling the response from the fetch request
        return response.json();           // Parsing the response body as JSON
      })
      .then((resData) => {                  // Handling the JSON data extracted from the response
        setAvailablePlaces(resData.places); // Updating the state with the fetched places data
      });
  }, []); // Dependency array is empty, indicating this effect runs only once on component mount


  return (
    <Places
      title="Available Places"
      places={avalablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
