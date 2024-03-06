import { redirect } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate); // transform local data to a date object
  const now = new Date(); // create new date object of current time
  const duration = expirationDate.getTime() - now.getTime(); // subtract the times to get the remaining duration. If negative => expired
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null; // loaders must return some value, not underfined
  }

  const tokenDuration = getTokenDuration(); // retrieves duration from above helper function

  if (tokenDuration < 0) {
    return 'EXPIRED'; // can be used in other parts of application
  }

  return token;
}

export function loadToken() {
  return getAuthToken()
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null; // loaders must return a value, even if its null. They must not return undefined
}
