import Link from 'next/link';
import css from './main-header.module.css';

import logo from '@/assets/logo.png';

export default function MainHeader() {
  return (
    <header className={css.header}>
      {/* in next project your image is an object and we must acess its src property */}
      <Link href='/' className={css.logo}>
        <img src={logo.src} alt='munch' />
        Let's Go Home
      </Link>
      <nav className={css.nav}>
        <ul>
          <li>
            <Link href='/meals'>Meals</Link>
          </li>
          <li>
            <Link href='/community'>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
