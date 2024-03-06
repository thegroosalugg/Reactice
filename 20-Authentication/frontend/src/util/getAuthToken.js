import { redirect } from "react-router-dom";

export function getAuthToken() {
  return localStorage.getItem('token');
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
