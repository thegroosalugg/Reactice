import { Form, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';
import Input from '../ui/Input';

function EventForm({ event, method }) {
  const data = useActionData(); // fetches response data from actions in this route.
  // eventForm is without a route, its child of NewEvent & EditEvent, but the action is only on NewEvent route
  const navigate = useNavigate(); // used to navigate to a specific route
  const navigation = useNavigation(); // used to check on the state of a request

  const submitting = navigation.state === "submitting" // will be true during state changes

  function cancelHandler() {
    navigate('..');
  }

  return (
    // Form is a React-Router hook, it will take the submit HTTP req data and send it to your action. Name field required on all inputs
    <Form method="post" className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((error) =>
          <li key={error}>{error}</li>
          )}
        </ul>
      )}
      <Input id="title" type="text" event={event} />
      <Input id="image" type="url"  event={event} />
      <Input id="date"  type="date" event={event} />
      <Input id="description" text  event={event} rows="4" />
      <div className={classes.actions}>
        <button disabled={submitting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={submitting}>{submitting ? "Sending..." : "Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;
