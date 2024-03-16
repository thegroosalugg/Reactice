import Image from 'next/image';
import css from './page.module.css';
import { getMeal } from '@/lib/meals';

// params key from object passed by Next
export default function MealItem({ params }) {
  const meal = getMeal(params.customFolder); // search for value equal to folder name
  meal.instructions = meal.instructions.replace(/\n/g, '<br />'); // regular expression replaces new lines \n with html line breaks

  return (
    <>
      <header className={css.header}>
        <div className={css.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={css.headerText}>
          <h1>{meal.title}</h1>
          <p className={css.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={css.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={css.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }} // the value should be displayed as HTML, which can be done with this prop
        ></p>
      </main>
    </>
  );
}
