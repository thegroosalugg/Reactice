import Link from 'next/link';

import css from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

// server side components can be converted to async functions
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

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
      {/* suspense will show the fallback while the promise is being fetched */}
      <Suspense fallback={<p className={css.loading}>Loading Meals...</p>}>
        <Meals />
      </Suspense>
    </>
  );
}
