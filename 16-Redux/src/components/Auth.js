import classes from './Auth.module.css';
import { authActions } from "../store";
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch(); // initialise dispatch function

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authActions.toggle(true));
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
