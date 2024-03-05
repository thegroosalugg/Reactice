import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams; // built-in browser feature to get search params outside of component function
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'mode unspecified' }, { status: 422 });
  }

  const data = await request.formData();
  const authData = { email: data.get('email'), password: data.get('password') };

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) { // error statuses set on dummy backend
    console.log('Auth Action, 401/422 [response]:', response)
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'User not authenticated' }, { status: 500 });
  }

  console.log('Auth Action, redirect [response]:', response)
  return redirect('/');
}
