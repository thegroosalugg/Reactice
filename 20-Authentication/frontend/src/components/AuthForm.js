import { Form, Link, useActionData, useNavigation, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';
import Input from '../ui/Input';

function AuthForm() {
  // searchParams has similar syntax to state. 1st element is an object that gives access to the currently set query parameters.
  // the 2nd is a function that lets us update the query parameters
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login' // how retrieve current set query parameter
  const { errors, message } = useActionData() || {}; // retrieves data when there is a return statement, in this action only 401/422 responses
  const navigation = useNavigation(); // checks the current http state

  const submitting = navigation.state === 'submitting';

  console.log('AuthForm [mode]:', searchParams.get('mode')) // logging data

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <Input id="email" type="email" errors={errors} />
        <Input id="password" type="password" errors={errors} />
        {message && <p>{message}</p>}
        <div className={classes.actions}>
          {/* '?' sets query parameter and 'mode' is the name of the parameter. Ternary switches mode between 2 custom set values */}
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
