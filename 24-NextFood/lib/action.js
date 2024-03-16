'use server';
import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

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

  if (
    invalid(meal.title) ||
    invalid(meal.summary) ||
    invalid(meal.instructions) ||
    invalid(meal.creator) ||
    invalid(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    console.log(
      'Validation Check Failed:\n' +
        `Title: ${!invalid(meal.title)}\n` +
        `Summary: ${!invalid(meal.summary)}\n` +
        `Instructions: ${!invalid(meal.instructions)}\n` +
        `Creator: ${!invalid(meal.creator)}\n` +
        `Creator Email: ${!invalid(meal.creator_email)} Contains @: ${meal.creator_email.includes('@')}\n` +
        `Image:`, meal.image, 'invalid:', meal.image.size === 0
    );

    return { message: 'Field required' };
  }

  await saveMeal(meal);
  redirect('/meals');
}
