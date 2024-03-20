import { MongoClient, ObjectId } from 'mongodb';
import MeetUpDetails from '@/components/meetups/MeetUpDetails';
import Head from 'next/head';

export default function MeetUpDetailsPage(props) {
  return (
    <>
    {/* this is the syntax to add metadata to the page router, import Head and wrap the title and description */}
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetUpDetails {...props.meetupData} />;
    </>
  );
}

// this function needs to run along side getStaticProps when using dynamic pages
// when creating static pages during run build, nextJS needs to know in advance all values for which it should pre-generate the page
export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGODB_URI); // fetched from ENV file
  const db = client.db(); // get hold of connected db from the client
  const meetupCollections = db.collection('meetups'); // name of 'collection' in Mongo

  // find can take 2 paramaters, 1st finds all the objects, 2nd searches only for Mongo '_id', and '1' means no other field values
  const meetups = await meetupCollections.find({}, { _id: 1 }).toArray(); // '0' would mean exclude these values

  client.close(); // close the connection to DB

  // must return an object which specifies all paths to pre-generate, and all other paths will lead to a 404 error
  // must contain a 'paths' key, whose value is an array. This array then has multiple objects that must have a 'params' key, whose value is an object
  return {
    fallback: false, // confirms whether paths has all supported values or not. False means that it contains all supprted value
    paths: meetups.map((meetup) => ({
      params: { meetslug: meetup._id.toString() }, // meetslug key name must matchthe folder name. Mongo ID needs to convert to string
    })),

    // keeping the hardcoded paths to showcase the structure
    // paths: [{ params: { meetslug: 'm1' } }, { params: { meetslug: 'm2' } }], // the URL key 'meetslug' must match folder name
  };
}

export async function getStaticProps(context) {
  // context is passed automatically, it contains a params key which contains the URL path matching the foldername
  const meetupId = context.params.meetslug;

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupCollections = db.collection('meetups');

  // findOne provided by Mongo, key is what we look for, value is what it must match, ObjectId converts our string to Mongo format so it compares correctly
  const foundMeetUp = await meetupCollections.findOne({
    _id: new ObjectId(meetupId),
  });
  // lecture did not use 'new' keyword and everything worked. For me, I have to insert this word or the app breaks.

  client.close(); // close the connection to DB

  return {
    props: {
      meetupData: {
        id: foundMeetUp._id.toString(), // convert id back to string for our component
        title: foundMeetUp.title,
        image: foundMeetUp.image,
        description: foundMeetUp.description,
        address: foundMeetUp.address,
      },
    },
  };
}
