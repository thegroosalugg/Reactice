import Link from 'next/link';

export default function MealItem({ params }) {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Dynamic Page</h1>
      <p>{params.dynamic}</p>
      <p>
        <Link href='/meals'>Back to Meals</Link>
      </p>
    </main>
  );
}
