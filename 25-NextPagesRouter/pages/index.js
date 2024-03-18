import Link from 'next/link';

// reserved file name. Is displayed on roon domain without additional paths

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <Link href='/news'>News</Link>
      <Link href='/blogs'>Blogs</Link>
    </>
  );
}
