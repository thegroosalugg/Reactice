import Link from 'next/link';

// when creating dynamic routes, we create a [folder] inside square brackets

// nextJS passes a props object to components that can be destructured
export default function BlogPost({ params }) {
  return (
    <main>
      <h1>Hello</h1>
      {/* params.name of dynamic folder will access the URL custom path */}
      <p>{params.dynamic}</p>
      <p>
        <Link href='/blog'>back</Link>
      </p>
    </main>
  );
}
