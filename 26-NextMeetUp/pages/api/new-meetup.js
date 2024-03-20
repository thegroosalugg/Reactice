import { MongoClient } from 'mongodb';

// api folder is a reserved name in the pages folder
// files inside do not return renderable code and are transformed into API routes that run only on the server

// function name is not reserved, but is usually called handler. It receives a request and a reponse
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body; // body is a built-in field which contains the body of the incoming request
    // const { title, image, address, description } = data; // destructure expected data we received

    // connect to MongoDB via the code provided. End of URL create DB name, if it doesn't exist it will be created
    const client = await MongoClient.connect(process.env.MONGODB_URI); // fetched from ENV file
    const db = client.db(); // get hold of connected db from the client

    // collections in Mongo are tables, and Documents are your entries
    const meetupCollections = db.collection('meetups'); // collection can have any name, it it doesn't exist it will be created

    const result = await meetupCollections.insertOne(data); // insert a 'document' into the collection. It has an object structure, like our data
    console.log(result);

    client.close(); // close the connection

    res.status(201).json({ message: 'Meet Up data added to Mongo, way to go!' }); // response required to finish
    // 201 successful response, add custom message with json
  }
}
