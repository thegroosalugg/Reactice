import { useRouteError } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function ErrorPage() {
  const error = useRouteError(); // router hook to allow catching of route specific errors

  let title = "Something went wrong";
  let message = "Couldn't load page";

  if (error.status === 500) { // set manually App.js
    message = JSON.parse(error.data).message
  }

  if (error.status === 404) { // set by browser
    title = "Not Found";
    message = "Specified Page Not Exist"
  }

  return (
    <>
      <MainNavigation />
      <main>
        <h2>{title}</h2>
        <p>{message}</p>
      </main>
    </>
  );
}
