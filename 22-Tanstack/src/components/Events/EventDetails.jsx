import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import { formatDate } from '../../util/formatDate.js';
import Modal from '../UI/Modal.jsx';
import { useState } from 'react';

export default function EventDetails() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // navigate from page on sucess
  const { id } = useParams(); // fetch URL ID
  const { data, isPending, isError, error } = useQuery({ // use query to fetch the event
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const {
    mutate, // mutate used to delete event
    isPending: pendingDelete, // keys with the same name as useQyery need to be renamed to avoid clash
    isError: errorOnDelete,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => { // will execute after the mutation function has a response
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none', // second argument prevents it sending another fetch request on this page. The request is bad as this ID is deleted
      }); // invalidates previous queries and fetches the updated events
      navigate('/events'); // event is deleted, redirect to main page
    },
  });

  function toggleModal() {
    setShowModal((prevState) => !prevState);
  }

  function handleDelete() {
    mutate({ id }); // backened expects an object with an ID key
  }

  console.log('Event Details\n', '[id]:', id, '\n', '[data]:', data, '\n', '[modal]:', showModal); // logging data

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal}>
          <h2>Are you sure?</h2>
          <p>This action is irreversible</p>
          <div className='form-actions'>
            {pendingDelete && <p>Deleting...</p>}
            {!pendingDelete && (
              <>
                <button className='button-text' onClick={toggleModal}>
                  Cancel
                </button>
                <button className='button' onClick={handleDelete}>
                  Proceed
                </button>
              </>
            )}
          </div>
          {errorOnDelete && (
            <ErrorBlock
              title='Deletion failed'
              message={deleteError.info?.message || "Couldn't delete event"}
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to='/events' className='nav-item'>
          View all Events
        </Link>
      </Header>
      <div id='event-details-content' className='center'>
        {isPending && <LoadingIndicator />}
        {isError && (
          <ErrorBlock
            title='Loading failed'
            message={error.info?.message || "Couldn't fetch event details"}
          />
        )}
      </div>
      {data && (
        <article id='event-details'>
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={toggleModal}>Delete</button>
              <Link to='edit'>Edit</Link>
            </nav>
          </header>
          <div id='event-details-content'>
            <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
            <div id='event-details-info'>
              <div>
                <p id='event-details-location'>{data.location}</p>
                <time dateTime={`${data.date}T${data.time}:00`}>
                  {formatDate(data.date)} @ {data.time}
                </time>
              </div>
              <p id='event-details-description'>{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
