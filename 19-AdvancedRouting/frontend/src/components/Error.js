import MainNavigation from "./MainNavigation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h2>404 An Error Occurred</h2>
        <p>Specified Page Not Exist</p>
      </main>
    </>
  );
}
