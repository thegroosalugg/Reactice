import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import Error from "./components/Error.jsx";
import { fetchUserPlaces, updateUserPlaces } from "./http.js";

function App() {
  const selectedPlace = useRef();
  const [userPlaces, setUserPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState({ fetch: null, update: null });

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true); // fetching data dynamic text displays
      try {
        const places = await fetchUserPlaces();
        setUserPlaces(places)
      } catch (error) {
        setError(prevError => ({ ...prevError, fetch: "Couldn't load user places" }));
      }

      setIsFetching(false); // location fetched, fallback text disappears
    }

    fetchPlaces()
  }, [])


  async function handleSelectPlace(selectedPlace) { // this function can be set as an async as it is only an event listener when we select a place
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try { // function may take some time so we set it to await
      await updateUserPlaces([selectedPlace, ...userPlaces]); // we cannot pass the current state as it has not been updated yet and the prev state would be passed
      // instead we create a new array with the previos state and update it with the selected place
    } catch (error) {
      // any functions that might fail should be wrapped in try catch
      setUserPlaces(userPlaces); // revert state to previous state if the await/async fails
      setError(prevError => ({ ...prevError, update: "Failed to update places" })); // if the error state has already been set, use previous state, or initiate new error message
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try {
      await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id))
    } catch (error) {
      setUserPlaces(userPlaces) // rollback the state if error caught
      setError(prevError => ({ ...prevError, update: "Could not delete place, soz" }));
    }

    setModalIsOpen(false);
  }, [userPlaces]);

  function handleError() {
    setError(prevError => ({ ...prevError, update: null }));
  }

  return (
    <>
      {/* onClose ensures error is reset is the ESC key is pressed instead of the close button inside Modal */}
      <Modal open={error.update} onClose={handleError}>
        {error.update && (
          <Error
            title="Oh no! Looks like there's an error"
            message={error.update}
            onConfirm={handleError}
          />
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error.fetch && <Error title={"It's not your day, have an error"} message={error.fetch} />}
        {!error.fetch && <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          isLoading={isFetching}
          loadingText="Loading your saved places..."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
