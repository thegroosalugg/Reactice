import { QueryClient } from '@tanstack/react-query';

// when exported, cannot be in the same file as App.
export const queryClient = new QueryClient(); // initialise new query client and pass it as the value to the client prop in the provider

export async function fetchEvents({ signal, searchTerm }) {
  // signal is built into useQuery object, searcTerm is custom
  let url = 'http://localhost:3000/events'; // if no arguments passed, uses this only

  if (searchTerm) { // searching handled on dummy backend, only search term is needed
    url += '?search=' + searchTerm;
  }

  const response = await fetch(url, { signal: signal }); // second argument configuration object
  // expects signal property of the shape sent by useQuery - will abort request if it receives such a signal

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  console.log( // logging data
    'FetchEvents',
    '[search]:', searchTerm,
    '[signal]:', signal,
    '[response]:', response
  )

  const { events } = await response.json();

  return events;
}

export async function createNewEvent(eventData) {
  const response = await fetch(`http://localhost:3000/events`, {
    method: 'POST',
    body: JSON.stringify(eventData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while creating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  console.log( // logging data
  'CreateNewEvent',
  '[response]:', response
)

  const { event } = await response.json();

  return event;
}

export async function fetchSelectableImages({ signal }) {
  const response = await fetch(`http://localhost:3000/events/images`, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the images');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  console.log( // logging data
  'FetchSelectableImages',
  '[signal]:', signal,
  '[response]:', response
)

  const { images } = await response.json();

  return images;
}
