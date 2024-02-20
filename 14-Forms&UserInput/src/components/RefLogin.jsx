import { useRef, useState } from "react";

export default function RefLogin() {
  const [emailInvalid, setEmailInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault(); // prevents browser's default behaviour, i.e. submitting form and sending an HTTP request

    const userEmail = email.current.value;
    const userPassword = password.current.value;

    const emailValid = userEmail.includes("@");

    if (!emailValid) {
      setEmailInvalid(true);
      return; // return ensures no other code in this function is executed if the IF check is passed
    }

    setEmailInvalid(false); // remove error message if submitted form skips IF check

    console.log('Sending HTTP request');
    console.log(userEmail, userPassword);
  }

  return (
    // alternative method to handle button submitting is to add the event listener to the form instead of the button
    // noValidate disables browser's built in validations. Since that is what we're working on, they are interferring
    <form noValidate onSubmit={handleSubmit}>
      <h2>Ref Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailInvalid && <p>Enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* Buttons nested in forms submit the form and send an HHTP request by default. One way to change this is to set type="button" */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
