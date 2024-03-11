import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', id], // same key as in Event Details means the form will be filled with data instantly thanks to caching
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  }); // signal provided by ReactQuery/Tanstack

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    // the formData passed in mutate in handleSubmit is automatically passed to onMutate
    onMutate: async (data) => { // optimistic updating: will execute the following code when mutate is executed, without awaiting

      // cancels ongoing queries linked to this key. The data is about to be updated and they may not be relevant anymore
      await queryClient.cancelQueries({ queryKey: ['events', id] });

      const rollbackEvent = queryClient.getQueryData(['events', id]); // similar to below, fetches previous data and stores in a variable

      // setQueryData will update the data immediately to formData without awaiting async to complete response
      queryClient.setQueryData(['events', id], data.event); // formData is an object with an event key. Expects 2 arguments, the key and the data to set

      return { rollbackEvent }; // this return data will be passed to the 'context' key when calling 'onSettled'
    },

    // receives same props, data, error etc. Also context which is used to rollback to previous data
    onError: (error, data, context) => { // also expects a function as a value which will execute if errors caught
      // rollback data if caught. Context is a queries property, and .rollbackEvent is the return from onMutate
      queryClient.setQueryData(['events', id], context.rollbackEvent);
    },

    onSettled: () => { // like on success, executes when mutation finished, whether successfully or via rollback
      queryClient.invalidateQueries(['events', id]); // queries invalidated and new data fetched.
      // When configuration isn't needed, can pass queryKey directly as an argument without passing an object
    }
  });

   function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate('../'); // navigate immediately without waiting for success
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = (
      <div className='center'>
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title='Loading failed'
          message={error.info?.message || "Couldn't fetch event details"}
        />
        <div className='form-actions'>
          <Link to='../' className='button'>Close</Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to='../' className='button-text'>
          Cancel
        </Link>
        <button type='submit' className='button'>
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
