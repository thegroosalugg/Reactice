import Header from '@/components/header'; // next allows us to reach the root directory with @
import Link from 'next/link';

// nextJS relies on special reserved path names inside the App folder to render pages, such as page.js

export default function Home() {
  console.log('This Component Function renders on the SERVER');

  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      {/* using an anchor would mean a brand new page is downloaded from the backend */}
      <p><Link href='/blog'>Blogs</Link></p>
      <p><Link href='/about'>About Us</Link></p>
      {/* using Next's Link instead of anchor keeps the app as an SPA and updates UI via client side JS code */}
    </main>
  );
}
