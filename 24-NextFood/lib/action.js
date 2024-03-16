'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

 // special directive that ensures the function executes on the server and not the client. Must be async
// can also be run inside specific functions when initialised inside a component function
// use client and server should not be initialised in the same file, but functions using them can be imported to the same file

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  await saveMeal(meal)
  redirect('/meals')
}
