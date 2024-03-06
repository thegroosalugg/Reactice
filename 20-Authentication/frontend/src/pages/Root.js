import {
  Outlet,
  useLoaderData,
  useSubmit,
} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit(); //allows for programatic submitting of a router Form hook

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDuration = getTokenDuration();

    console.log('ROOT, [token duration]:', tokenDuration)

    setTimeout(() => { // null = no data is being submitted. action/method as per props set on form. Logout is the route
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration); // automatic logout as per token duration value

  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
