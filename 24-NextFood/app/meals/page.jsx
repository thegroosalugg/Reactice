import Link from 'next/link';

import css from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

            // server side components can be converted to async functions
export default async function MealsPage() {
  const meals = await getMeals();

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
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
