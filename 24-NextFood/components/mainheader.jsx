import Link from 'next/link';

import logo from '@/assets/logo.png';

export default function MainHeader() {
  return (
    <header>
      {/* in next project your image is an object and we must acess its src property */}
      <Link href='/'>
        <img src={logo.src} alt='munch' />
        Let's Go Home
      </Link>
      <nav>
        <li>
          <Link href='/meals'>Meals</Link>
        </li>
        <li>
          <Link href='/community'>Community</Link>
        </li>
      </nav>
    </header>
  );
}
