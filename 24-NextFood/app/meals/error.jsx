'use client'; // error pages must be made into client side components

// error.js is another reserved file name, this will render instead of sibling or nest pages when an error is caught

export default function ErrorPage() {
  return (
    <main className='error'>
      <h1>An Error Occured</h1>
      <p>Unable to load data...</p>
    </main>
  );
}
