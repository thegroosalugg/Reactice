import Link from 'next/link';

// create a new route by adding a folder with a page.JS file inside
// folder names are case sensitive unfortunately. Name the folders in lower case otherwise paths need uppercase too

export default function About() {
  return (
    <main>
      <h1>About Page</h1>
      <p><Link href='/'>Home</Link></p>
    </main>
  );
}
