import { QueryClient } from '@tanstack/react-query';

// when exported, cannot be in the same file as App.
export const queryClient = new QueryClient(); // initialise new query client and pass it as the value to the client prop in the provider

export async function fetchEvents({ signal, searchTerm, max }) {
  // signal is built into useQuery object, searcTerm is custom
  let url = 'http://localhost:3000/events'; // if no arguments passed, uses this only

  if (searchTerm && max) { // the URL gets ? for the first parameter and & for the second
    url += '?search=' + searchTerm + '&max=' + max; // as such the construction of the max string changes if we have a searchTerm
  } else if (max) {
    url += '?max=' + max;
  } else if (searchTerm) {
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
  'FetchEvents\n',
  '[search]:', searchTerm, '\n',
  '[max]:', max, '\n',
  '[signal]:', signal, '\n',
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
  'CreateNewEvent\n',
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
  'FetchSelectableImages\n',
  '[signal]:', signal, '\n',
  '[response]:', response
)

  const { images } = await response.json();

  return images;
}

export async function fetchEvent({ id, signal }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  console.log( // logging data
  'FetchEvent\n',
  '[id]:', id, '\n',
  '[signal]:', signal, '\n',
  '[response]:', response
)

  const { event } = await response.json();

  return event;
}


export async function deleteEvent({ id }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = new Error('An error occurred while deleting the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  console.log( // logging data
  'DeleteEvent\n',
  '[id]:', id, '\n',
  '[response]:', response
)

  return response.json();
}

export async function updateEvent({ id, event }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ event }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while updating the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  console.log( // logging data
  'UpdateEvent\n',
  '[id]:', id, '\n',
  '[response]:', response
)

  return response.json();
}
