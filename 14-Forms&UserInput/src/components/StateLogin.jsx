import { useState } from "react";

export default function StateLogin() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isEditting, setIsEditting] = useState({ email: false, password: false });

  const emailInvalid = isEditting.email && !userData.email.includes('@');

  function handleSubmit(event) {
    event.preventDefault(); // prevents browser's default behaviour, i.e. submitting form and sending an HTTP request
    console.log(userData);
  }

  function handleBlur(dataType) {
    setIsEditting((prevState) => ({ ...prevState, [dataType]: true}))
  }

  function handleInputChange(dataType, value) {
    // when the function is passed, we wrap the curlies {} in parenthesis () to tell React we're creating an Object and not starting a function
    setUserData((prevData) => ({ ...prevData, [dataType]: value })); // using the [] syntax we can directly access a key inside the object and then change its values
    setIsEditting((prevState) => ({ ...prevState, [dataType]: false})) // revert blur state to false to remove error messages until user finishes editting
  }

  return (
    // alternative method to handle button submitting is to add the event listener to the form instead of the button
    <form onSubmit={handleSubmit}>
      <h2>State Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleBlur('email')} // onBlur is an HTML prop which activates when the element loses focus
            onChange={(event) => handleInputChange("email", event.target.value)} // e-t-v captures the user input data and passes its value as an argument
            value={userData.email}
          />
          <div className="control-error">{emailInvalid && <p>Enter a valid email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleBlur('password')}
            onChange={(event) => handleInputChange("password", event.target.value)}
            value={userData.password}
          />
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
