// not-found.js is a reserved file name, this will render instead of sibling or nest pages if the URL is invalid

export default function ErrorPage() {
  return (
    <main className='not-found'>
      <h1>Meal not found</h1>
      <p>Someone probably ate it...</p>
    </main>
  );
}
