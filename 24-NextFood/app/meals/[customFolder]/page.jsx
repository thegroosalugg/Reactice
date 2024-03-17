import Image from 'next/image';
import css from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

// dynamic metadata generators must export async function with a reserved name
export async function generateMetadata({ params }) {
  const meal = getMeal(params.customFolder); // search for value equal to folder name

  if (!meal) {
    notFound();
  }

  return { title: meal.title, description: meal.summary };
}

// params key from object passed by Next
export default function MealItem({ params }) {
  const meal = getMeal(params.customFolder); // search for value equal to folder name
  // const instructions = meal.instructions.replace(/\n/g, '<br />'); // regular expression replaces new lines \n with html line breaks

  if (!meal) {
    notFound(); // Next hook, loads the nearest notFound page, from /meals parent. Allows for custom error pages when wrong URL entered
  }

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
        {/* <p
          className={css.instructions}
          // by reading the meal.instructions as HTML, it allows us to preserve formatting by replacing new lines \n with HTML <br/>
          dangerouslySetInnerHTML={{ __html: instructions }} // allows the value to be set directly as html code. Expects an object with __html key
        ></p> */}

        {/* style whitespace also preserves formatting, eliminating need for dangerousHTLM, regexp, xss & data mutation */}
        <p className={css.instructions} style={{ whiteSpace: 'pre-line' }}>{meal.instructions}</p>
      </main>
    </>
  );
}
