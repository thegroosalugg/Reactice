'use server';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

// special directive that ensures the function executes on the server and not the client. Must be async
// can also be run inside specific functions when initialised inside a component function
// use client and server should not be initialised in the same file, but functions using them can be imported to the same file

const invalid = (text) => !text || text.trim() === '';

// prevState has to be accepted dueto useFormState in parent component, so formData becomes second argument
export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  const errors = {};

  if (invalid(meal.title)) {
    errors.title = 'Title required';
  }

  if (invalid(meal.summary)) {
    errors.summary = 'Summary required';
  }

  if (invalid(meal.instructions)) {
    errors.instructions = 'Instructions required';
  }

  if (invalid(meal.creator)) {
    errors.name = 'Name required';
  }

  if (invalid(meal.creator_email) || !meal.creator_email.includes('@')) {
    errors.email = 'Invalid email';
  }

  if (!meal.image || meal.image.size === 0) {
    errors.image = 'Image required';
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  await saveMeal(meal);
  revalidatePath('/meals'); // allows you to purge cached data on-demand for a specific
  // path. Run builds are heavily cached and require the cache to be cleared when new data is entered for it to appear on the page
  redirect('/meals');
}
