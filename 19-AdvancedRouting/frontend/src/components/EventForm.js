import { useNavigate, useRouteLoaderData } from 'react-router-dom';

import classes from './EventForm.module.css';
import Input from '../ui/Input';

function EventForm({ method }) {
  const { event } = useRouteLoaderData("event-info")
  const navigate = useNavigate();

  function cancelHandler() {
    navigate('..');
  }

  return (
    <form className={classes.form}>
      <Input id="title" type="text" event={event} />
      <Input id="image" type="url"  event={event} />
      <Input id="date"  type="date" event={event} />
      <Input text id="description" rows="5" event={event} />
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
