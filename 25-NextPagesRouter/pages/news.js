import Link from 'next/link';

// custom created page. Is found on our-domain.com/news. The filename acts the URL path, however no nested routes can developed here

export default function NewsPage() {
  return (
    <>
      <h1>News</h1>
      <Link href='/'>Home</Link>
    </>
  );
}
