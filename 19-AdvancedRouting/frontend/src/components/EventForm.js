import { Form, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';
import Input from '../ui/Input';

function EventForm({ event, method }) {
  // fetches response data from actions in this route.
  const { errors } = useActionData() || {}; // destructured so could come back undefined causing error. If no error empty object keeps things in check
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
      {/* prints all errors from the object in a list */}
      {/* {errors && (
        <ul>
          {Object.values(errors).map((error) =>
          <li key={error}>{error}</li>
          )}
        </ul>
      )} */}
      <Input id="title" type="text" event={event} errors={errors} />
      <Input id="image" type="url"  event={event} errors={errors} />
      <Input id="date"  type="date" event={event} errors={errors} />
      <Input id="description" text  event={event} errors={errors} rows="4" />
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
