import fs from 'node:fs'; // file system: built-in Node.js module that provides methods for interacting with the file system on your computer/server

import sql from 'better-sqlite3';
import slugify from 'slugify'; // creates custom paths out of strings
import xss from 'xss'; // Cross-Site Scripting. Ensures any executable code is treated as plain text and is not executed

const db = sql('meals.db'); // initialise database by calling sequel and passing the name of the database as an argument

export async function getMeals() { // now we can call functions on the database
  await new Promise((resolve) => setTimeout(resolve, 3000)); // this is Promise simply adds a delay to simulate an action that takes longer
  // sql doesn't use promises and the below statement does not need to be awaited, the await/async is added only for simulation

  // throw new Error('Failed to fetch meals') // error thrown automatically to test error handling

  return db.prepare('SELECT * FROM meals').all(); // prepare a new sequel statement, to select all columnts from meals, then fetch the data with .all()
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  // protects against sequel injection attacks, do not concatenate the query directly or insert executable code inside it
}

// saves images to the public folder as we cannot save them to the DB
export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true }); // second argument configuration object to set all text to lower case
  meal.instructions = xss(meal.instructions);
  // prevents user input from executing harmful user injected code, as this data is displayed later with dangerouslySetInnerHTML

  const extension = meal.image.name.split('.').pop(); // turns the string into array of words after each . then returns the last element
  const fileName = `${meal.slug}.${Math.random()}.${extension}`; // create unique filename from the slug, a random number (to avoid overwriting) and extension

  // allows you to write data sequentially to a file
  const stream = fs.createWriteStream(`public/images/${fileName}`); // creates a writable stream for writing data to a file
  // ultimately it creates a path in your file system, anything written here will either be created over overwritten if it exists in your FS

  // arrayBuffer() on this File object reads the binary data of the file asynchronously and returns it as an ArrayBuffer
  // returns a Promise that resolves with the ArrayBuffer containing the binary data
  const bufferedImage = await meal.image.arrayBuffer(); // This binary data can then be processed or saved to the local filesystem

  // converts the binary image data retrieved from arrayBuffer into a Node.js Buffer object, which can be written to the stream
  stream.write(Buffer.from(bufferedImage), (error) => {
    //The 2nd argument to write() is a callback function that handles any errors that occur during the writing process
    if (error) {
      throw new Error("Image couldn't be saved");
    }
  });

  meal.image = `/images/${fileName}`; // image path stored in db. Points to the path name of the file created by createWriteStream
  // doesn't require a 'public/' path, nextJS automatically looks in public folder when running code, only writing requires full path

  // add data to meals table, selecting existing keys or creating them. Values sets the data and must match the order to the column
  // should not be interpolated. Instead @dynamic pointers to the meal object that is passed when .run is called sets those values
  db.prepare(`
    INSERT INTO meals
      (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
    )
  `).run(meal); // run is primarily used to modifying the database without returning a value. Passes meal received at start of function
}
