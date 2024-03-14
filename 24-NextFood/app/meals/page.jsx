import Link from 'next/link';

import css from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';

export default function MealsPage() {
  return (
    <>
      <header className={css.header}>
        <h1>
          Legendary Meals created <span className={css.highlight}>by you</span>
        </h1>
        <p>Choose your favourite recipe and cook it up</p>
        <p className={css.cta}>
          <Link href='/meals/share'>Share Your Meal</Link>
        </p>
      </header>
      <main className={css.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
