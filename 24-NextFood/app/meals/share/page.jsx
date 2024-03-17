'use client';

import ImagePicker from '@/components/meals/image-picker';
import css from './page.module.css';
import { shareMeal } from '@/lib/action';
import FormButton from '@/components/meals/meal-form-submit';
import { useFormState } from 'react-dom'; // is a Hook that allows you to update state based on the result of a form action
import Input from '@/components/meals/input';

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
            <Input id='name' label='Your Name' message={state.message} />
            <Input id='email' label='Your email' message={state.message} />
          </div>
          <Input id='title' label='Title' message={state.message} />
          <Input id='summary' label='Short Summary' message={state.message} />
          <Input
            id='instructions'
            label='Instructions'
            message={state.message}
            text
            rows='10'
          />
          <ImagePicker name='image' label='Current Pic' message={state.message} />
          <p className={css.actions}>
            <FormButton />
          </p>
        </form>
      </main>
    </>
  );
}
