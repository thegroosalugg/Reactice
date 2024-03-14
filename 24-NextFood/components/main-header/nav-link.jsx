'use client'; // required to usePathName
// client conversions should be in the bottom level components. If a parent does not need to use the hooks, make a child component...
// ...and convert this to a client side component

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // gets the current path name, like params but that works for dynamic folders in NextJS
import css from './nav-link.module.css';

export default function NavLink({ href, label }) {
  const path = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={ // checks path starts with the current path, then sets it to active class
          path.startsWith(href) ? `${css.link} ${css.active}` : css.link
        }
      >
        {label}
      </Link>
    </li>
  );
}
