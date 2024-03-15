import sql from 'better-sqlite3';

const db = sql('meals.db'); // initialise database by calling sequel and passing the name of the database as an argument

export async function getMeals() { // now we can call functions on the database
  await new Promise((resolve) => setTimeout(resolve, 2000)); // this is Promise simply adds a delay to simulate an action that takes longer
  // sql doesn't use promises and the below statement does not need to be awaited, the await/async is added only for simulation
  return db.prepare('SELECT * FROM meals').all() // prepare a new sequel statement, to select all columnts from meals, then fetch the data with .all()
}
