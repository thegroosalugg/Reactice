import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';
import { useFetch } from '../hooks/useFetch.js';

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces()

  // A Promise in JS represents the eventual completion (or failure) of an asynchronous operation and its resulting value
  return new Promise((resolve) => { // promise is an object that takes a function as an argument with 2 parameters, resolve and reject
    navigator.geolocation.getCurrentPosition((position) => { // reject is not needed in this case (to throw errors)
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );

      resolve(sortedPlaces)
    });
  })
}

export default function AvailablePlaces({ onSelectPlace }) {

  const { fetchedData: availablePlaces, isFetching, error } = useFetch(fetchSortedPlaces, [])

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
