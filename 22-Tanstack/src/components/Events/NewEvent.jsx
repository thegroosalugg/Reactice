import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { createNewEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function NewEvent() {
  const navigate = useNavigate();
  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: createNewEvent,
  }); // similar to useQuery, but used to send http requests, such as updating/creating/deleting

  function handleSubmit(formData) {
    mutate({ events: formData });
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && 'Submitting...'}
        {!isPending && (
          <>
            <Link to='../' className='button-text'>
              Cancel
            </Link>
            <button type='submit' className='button'>
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title='Failed to create event'
          message={error.info?.message || "Check your input"}
        />
      )}
    </Modal>
  );
}
