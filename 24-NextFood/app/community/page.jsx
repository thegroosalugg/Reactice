import Link from "next/link";

export default function Community() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Community
      </h1>
      <p><Link href='/'>Home</Link></p>
    </main>
  );
}
