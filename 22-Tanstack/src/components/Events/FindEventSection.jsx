import { useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { fetchEvents } from '../../util/http';
import EventItem from './EventItem';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState();
  const { data, isPending, isError, error } = useQuery({ // query always passes an object to the query function
    queryKey: ['events', searchTerm], // ensures dynamic caching for each search term
    queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }), // like with event listeners, wrap with arrow function to pass an argument
  }); // signal is a built-in key found in the object passed by useQurry to the queryFn

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value); // ref value stored in state to ensure the search query updates, as refs do not cause component re-render
  }

  let content = <p>Please enter a search term and to find events.</p>;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) { // in order for query error to work, there needs to be an error thrown in the fetch function
    content = (
      // checks if the error has an info key (set in http.js), and displays message of caught errors. If not caught, fallback || message
      <ErrorBlock
        title='An error occurred'
        message={error.info?.message || 'Failed to fetch events'}
      />
    );
  }

  if (data) {
    content = (
      <ul className='events-list'>
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );

    return (
      <section className='content-section' id='all-events-section'>
        <header>
          <h2>Find your next event!</h2>
          <form onSubmit={handleSubmit} id='search-form'>
            <input
              type='search'
              placeholder='Search events'
              ref={searchElement}
            />
            <button>Search</button>
          </form>
        </header>
        {content}
      </section>
    );
  }
}
