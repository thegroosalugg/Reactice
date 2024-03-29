import { useState } from "react";

export default function Signup() {
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false)

  function handleSubmit(event) {
    event.preventDefault(); // prevent automatically submitting form and sending HTTP request

    const formData = new FormData(event.target) // FormData is a bult-in browser function to capture all data from inputs in the form element
    // in order for it to work, every 'input' and 'select' element must have a 'name' prop
    const acquisitionBoxes = formData.getAll('acquisition') // this will retrieve all input data from the 'acquisition' name prop, as there are several elements with this name
    const data = Object.fromEntries(formData.entries()) // Object is a built-in browser function.
    // Object.fromEntries() constructs the object using the iterable returned by formData.entries(), which yields arrays representing key-value pairs.
    data.acquisitionn = acquisitionBoxes // merge the 2 datasets by adding a new key to data and setting its value to the entries of the acquisitionBoxes

    // the second input has to be named 'confirm-password' and thus a different syntax is used to access its key as dashes[-] are not supported outside of strings
    if (data.password !== data['confirm-password']) {
      setPasswordsDontMatch(true);
      return; // do not execute remainder of code if the IF check passed
    }

    setPasswordsDontMatch(false);
    console.log(data)
    event.target.reset() // resets the form
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        {/* 'required' will add browser built-in validation so no additional code is required */}
        {/* the type "email" will also tell the browser what & how to validate */}
        <input id="email" type="email" name="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          {/* additionally a minLength is another browser prop for additional validation */}
          <input id="password" type="password" name="password" required minLength={6} />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <div className="control-error">{passwordsDontMatch && <p>Passwords do not match</p>}</div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required/>
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" required />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        {/* button type reset will also reset the form */}
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
