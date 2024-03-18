import Link from 'next/link';

// nested page in the blogs path. Accessed with 'our-domain.com/blogs/nestedblog'. Filename again serves as the URL path

export default function NestedBlogPage() {
  return (
    <>
      <h1>Nested Page</h1>
      <p>Just a regular page in the routes, nothing special</p>
      <Link href='/blogs'>Back</Link>
    </>
  );
}
