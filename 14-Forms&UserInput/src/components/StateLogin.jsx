import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import Input from "./Input";
import { useInput } from "./UseInput";

export default function StateLogin() {
  const {
    value: userEmail,
    handleBlur: emailBlur,
    handleInputChange: emailChange,
    error: emailError
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value)); // This arrow function is passed as the validationFunction parameter to the useInput custom hook

  const {
    value: userPassword,
    handleBlur: passwordBlur,
    handleInputChange: passwordChange,
    error: passwordError
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault(); // prevents browser's default behaviour, i.e. submitting form and sending an HTTP request

    if (emailError || passwordError) { return } // do not execute code IF invalid

    console.log(userEmail, userPassword);
  }

  return (
    // alternative method to handle button submitting is to add the event listener to the form instead of the button
    <form noValidate onSubmit={handleSubmit}>
      <h2>State Login</h2>

      <div className="control-row">
        <Input
          id="email"
          type="email"
          name="email"
          onBlur={emailBlur} // onBlur is an HTML prop which activates when the element loses focus
          onChange={emailChange}
          value={userEmail}
          error={emailError && "Enter a valid email address"}
        />
        <Input
          id="password"
          type="password"
          name="password"
          onBlur={passwordBlur}
          onChange={passwordChange}
          value={userPassword}
          error={passwordError && "Enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* Buttons nested in forms submit the form and send an HHTP request by default. One way to change this is to set type="button" */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
