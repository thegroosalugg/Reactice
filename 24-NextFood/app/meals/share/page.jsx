'use client';

import ImagePicker from '@/components/meals/image-picker';
import css from './page.module.css';
import { shareMeal } from '@/lib/action';
import FormButton from '@/components/meals/meal-form-submit';
import { useFormState } from 'react-dom'; // is a Hook that allows you to update state based on the result of a form action

export default function ShareMealPage() {
  // First argument takes returnable code, second function takes fallback state while first value awaited
  const [state, formAction] = useFormState(shareMeal, { message: null }); // not to be confused with useFormStatus
  // formSubmit replaces shareMeal as the action

  return (
    <>
      <header className={css.header}>
        <h1>
          Share your <span className={css.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={css.main}>
        {/* attach server functions via action */}
        <form className={css.form} action={formAction}>
          <div className={css.row}>
            <p>
              <label htmlFor='name'>Your name</label>
              <input type='text' id='name' name='name' required />
            </p>
            <p>
              <label htmlFor='email'>Your email</label>
              <input type='email' id='email' name='email' required />
            </p>
          </div>
          <p>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' required />
          </p>
          <p>
            <label htmlFor='summary'>Short Summary</label>
            <input type='text' id='summary' name='summary' required />
          </p>
          <p>
            <label htmlFor='instructions'>Instructions</label>
            <textarea
              id='instructions'
              name='instructions'
              rows='10'
              required
            ></textarea>
          </p>
          <ImagePicker name='image' label='Current Pic' />
          {state.message && <p>{state.message}</p>}
          <p className={css.actions}>
            <FormButton />
          </p>
        </form>
      </main>
    </>
  );
}
