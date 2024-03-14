import Link from 'next/link';
import Image from 'next/image';

import css from './meal-item.module.css';

                                       // slug is name of custom path
export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={css.meal}>
      <header>
        <div className={css.image}>
          {/* use fill prop instead of setting width/height when you don't know the size of the image you will receive */}
          <Image src={image} alt={title} fill />
        </div>
        <div className={css.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={css.content}>
        <p className={css.summary}>{summary}</p>
        <div className={css.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
