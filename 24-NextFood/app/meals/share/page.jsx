import ImagePicker from '@/components/meals/image-picker';
import css from './page.module.css';

export default function ShareMealPage() {
  async function shareMeal(formData) {
    'use server'; // special directive that ensures the function executes on the server and not the client. Must be async

    const meal = {
      title: formData.get('title'),
      image: formData.get('image'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    }

    console.log(meal)
  }

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
        <form className={css.form} action={shareMeal}>
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
          <ImagePicker name='image' label="Current Pic" />
          <p className={css.actions}>
            <button type='submit'>Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
