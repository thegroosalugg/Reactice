import Link from 'next/link';
import css from './main-header.module.css';

import logo from '@/assets/logo.png';
import Image from 'next/image';
import HeaderBackground from './header-background';
import NavLink from './nav-link';

export default function MainHeader() {
  console.log('Main Header Component');

  return (
    <>
      <HeaderBackground />
      <header className={css.header}>
        <Link href='/' className={css.logo}>
          {/* in NextJS the image is an object and we must acess its src property */}
          {/* <img src={logo.src} alt='munch' /> */}
          
          {/* Using the alternative Next Image hook. Pass the whole object instead of a key. Adds extra properties. Lazy Loading.
        'Priority' sets loading priority, as image will always be displayed */}
          <Image src={logo} alt='munch' priority />
          Let's Go Home
        </Link>
        <nav className={css.nav}>
          <ul>
            <NavLink href='/meals' label='Meals' />
            <NavLink href='/community' label='Community' />
          </ul>
        </nav>
      </header>
    </>
  );
}
