import { MongoClient } from 'mongodb';
import MeetupList from '@/components/meetups/MeetupList';

// ROOT PAGE. It all starts here

// props object is received directly from getStaticProps below, otherwise no data would have been passed
export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// Reserved function name. Pages Router component, obsolete in App Router. It calls this function before it calls the component.
// contains the initial data this page needs. UseEffect runs AFTER the component renders once, thus initial data is missing, affecting SEO
// executed during the build process, not on the server or client, so the code is protected. Creates a static page for initial render

export async function getStaticProps() {
  // same code as in new-meetups API, reused for visualisation
  const client = await MongoClient.connect(process.env.MONGODB_URI); // fetched from ENV file
  const db = client.db(); // get hold of connected db from the client
  const meetupCollections = db.collection('meetups'); // name of 'collection' in Mongo

  // find by default finds all the documents. ToArray transforms it as our component expects an array
  const meetups = await meetupCollections.find().toArray();

  client.close(); // close the connection to DB

  // must return an object with a PROPS key, this then holds another object with the data we want
  return {
    props: { // fetched data must be transformed due to ID syntax used in Mongo
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(), // Mongo has a '_id' key, and must be converted to string for it to work in our component
      })),
    },
    revalidate: 10, // number of seconds before NextJS regenerates this page for an incoming request
  }; // this ensures that when new data is added, the page fetches it and displays the data, i.e. user submitted content
}


// // executed only on the server. Will fetch data each time a request is sent, unlike static which needs to be revalidated
// export async function getServerSideProps(context) {
//   // fetch data for API

//   const request = context.req; // is passed a context object which holds the response and request, in case any additional data is needed
//   const response = context.res; // not used here, displayed just for syntax

//   return {
//     props: { meetups: DUMMY_DATA },
//   };
// }
