import Link from "next/link";

// to create nested paths, the folder name acts as the URL path and the index.js page is the root path of that folder

export default function BlogsPage() {

  // same as App Router, use next/Link to link pages without sending additional http requests that the anchor would send
  return (
    <>
      <h1>Blogs</h1>
      <ul>
        <li><Link href='/blogs/react'>Dynamic Page</Link></li>
        <li><Link href='/blogs/nextjs'>Another One</Link></li>
        <li><Link href='/blogs/nestedblog'>Folder Page (not dynamic)</Link></li>
      </ul>
      <Link href='/'>Home</Link>
    </>
  );
}
