import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {
  const query = useQuery({ // the constant create from useQuery is an object with many built-in properties
    // key caches data. Tanstack reuses cached data and shows on screen immediately when another fetch request is sent
    queryKey: ['events'], // Key is an array that can hold any data type including nested arrays & objects.
    queryFn: fetchEvents // defines the code that will send the request
  });

  let content;

  if (query.isLoading) {
    content = <LoadingIndicator />;
  }

  if (query.error) { // in order for query error to work, there needs to be an error thrown in the fetch function
    content = (
      // checks if the error has an info key (set in http.js), and displays message caught errors. If not caught, fallback || message
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
