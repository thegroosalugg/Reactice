import Link from "next/link";

export default function MealShare() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Share
      </h1>
      <p><Link href='/meals'>Back to Meals</Link></p>
    </main>
  );
}
