import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {
  const query = useQuery({ // the constant create from useQuery is an object with many built-in properties
    // key caches data. Tanstack reuses cached data and shows on screen immediately when another fetch request is sent with the same query key
    queryKey: ['events', { max: 3}], // Key is an array that can hold any data type including nested arrays & objects.

    // Signal is a built-in query prop...
    // ...as is queryKey which holds the data above. We can spread queryKey by accessing [1] the second element '{max: 3}' without repetition
    queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }), // defines the code that will send the request
    staleTime: 5000, // minimum time (ms) before another request is sent. Avoid sending too many unecessary rquests
    gcTime: 30 * 60 * 1000, // timer before cached data is cleared
  });

  let content;

  if (query.isLoading) {
    content = <LoadingIndicator />;
  }

  if (query.isError) { // in order for query error to work, there needs to be an error thrown in the fetch function
    content = (
      // checks if the error has an info key (set in http.js), and displays message of caught errors. If not caught, fallback || message
      <ErrorBlock title="An error occurred" message={query.error.info?.message || "Failed to fetch events"} />
    );
  }

  if (query.data) {
    content = (
      <ul className="events-list">
        {query.data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
