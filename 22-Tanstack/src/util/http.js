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
    '[search]:', searchTerm,
    '[signal]:', signal,
    '[response]:', response
  )

  const { events } = await response.json();

  return events;
}
