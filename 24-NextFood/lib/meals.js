import sql from 'better-sqlite3';

const db = sql('meals.db'); // initialise database by calling sequel and passing the name of the database as an argument

export async function getMeals() { // now we can call functions on the database
  await new Promise((resolve) => setTimeout(resolve, 3000)); // this is Promise simply adds a delay to simulate an action that takes longer
  // sql doesn't use promises and the below statement does not need to be awaited, the await/async is added only for simulation

  // throw new Error('Failed to fetch meals') // error thrown automatically to test error handling

  return db.prepare('SELECT * FROM meals').all() // prepare a new sequel statement, to select all columnts from meals, then fetch the data with .all()
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
 // protects against sequel injection attacks, do not concatenate the query directly or insert executable code inside it
}
