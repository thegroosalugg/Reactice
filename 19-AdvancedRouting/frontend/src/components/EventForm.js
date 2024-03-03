import { Form, json, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import classes from './EventForm.module.css';
import Input from '../ui/Input';

export default function EventForm({ event, method }) {
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
    <Form method={method} className={classes.form}>
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

export async function action({ request, params }) {
  const data = await request.formData(); // used for processing the response of a fetch request, if the expected data comes from a form
  const eventData = { // construct a new object and use .get and point to the input field names to extract the data
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description")
  };

  let url = "http://localhost:8080/events";

  if (request.method === "PATCH") {
    url += `/${params.eventIdFromRouter}` // for patch requests updates url with forward slash / and dynamic ID set in router
  }

  const response = await fetch(url, {
    method: request.method,
    headers: { "Content-Type": "application/json" }, // ensure data handled correctly
    body: JSON.stringify(eventData)
  })

  if (response.status === 422) { // activate server side validation on the backend
    return response // return prevents redirect below, keep client on page, keep input data, display server side validations
  }

  if (!response.ok) {
    throw json({title: "Updating failed", message: "Didn't manage to save data"}, {status: 500})
  }

  return redirect("/events") // react router hook that will redirect to specified path on completopn, i.e. away from form page
}
