import Link from 'next/link';

export default function BlogPage() {
  return (
    <main>
      <h1>Blogs</h1>
      {/* blog is the folder we access, inside is the dynamic path folder and we can create any path we want thereafter, the same page is rendered */}
      <p>
        <Link href='/blog/custompath1'>First Post</Link>
      </p>
      <p>
        <Link href='/blog/dynamicpath2'>Second Post</Link>
      </p>
      <p>
        <Link href='/'>Home</Link>
      </p>
    </main>
  );
}
