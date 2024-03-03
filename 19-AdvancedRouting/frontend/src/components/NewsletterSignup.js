import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  const fetcher = useFetcher(); // React-Router hook object with several built-in functions, often used for triggering actions without route transitions
  const { state, data } = fetcher // extract other properties from fetcher. state: "idle" | "loading" | "submitting"

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message) // retrieve message from NewsletterPage signUp action function
    }
  }, [state, data]) // will re-execute with any state or data changes

  return (
    // this form is included on all routes as its used in the NavBar, therefore using React-Router's Form hook would mean placing the action on every route
    // fetcher's form will trigger an action without initialising a route transition
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
