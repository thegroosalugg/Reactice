import { Form, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';
import Input from '../ui/Input';

function EventForm({ event, method }) {
  const navigate = useNavigate(); // used to navigate to a specific route
  const navigation = useNavigation(); // used to check on the state of a request

  const submitting = navigation.state === "submitting" // will be true during state changes

  function cancelHandler() {
    navigate('..');
  }

  return (
    // Form is a React-Router hook, it will take the submit HTTP req data and send it to your action. Name field required on all inputs
    <Form method="post" className={classes.form}>
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
