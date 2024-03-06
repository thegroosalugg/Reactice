export function getAuthToken() {
  return localStorage.getItem('token');
}

export function loadToken() {
  return getAuthToken()
}
