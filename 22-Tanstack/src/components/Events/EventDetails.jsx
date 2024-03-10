import { Link, Outlet, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { fetchEvent } from '../../util/http.js';
import { useQuery } from '@tanstack/react-query';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EventDetails() {
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  console.log('Event Details', '[id]:', id, '[data]:', data); // logging data

  return (
    <>
      <Outlet />
      <Header>
        <Link to='/events' className='nav-item'>
          View all Events
        </Link>
      </Header>
      {isPending && <p>Loading Event Details...</p>}
      {isError && (
        <ErrorBlock
          title='Loading failed'
          message={error.info?.message || 'Couldn\'t fetch event details'}
        />
      )}
      {data && (
        <article id='event-details'>
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button>Delete</button>
              <Link to='edit'>Edit</Link>
            </nav>
          </header>
          <div id='event-details-content'>
            <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
            <div id='event-details-info'>
              <div>
                <p id='event-details-location'>{data.location}</p>
                <time dateTime={`${data.date}T${data.time}:00`}>{data.date} @ {data.time}</time>
              </div>
              <p id='event-details-description'>{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
