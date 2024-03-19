import MeetUpDetails from '@/components/meetups/MeetUpDetails';

const DUMMY = {
  title: 'What',
  image:
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1710785271~exp=1710785871~hmac=57df0597a583af72601c3aca89b7b9f7aa2d4f1f9d3d02c63775d79ed744f297',
  description: 'No Way',
  address: 'New York',
};

export default function MeetUpDetailsPage() {
  return <MeetUpDetails {...DUMMY} />;
}

// this function needs to run along side getStaticProps when using dynamic pages
// when creating static pages during run build, nextJS needs to know in advance all values for which it should pregenerate the page
export async function getStaticPaths() {
  // must return an object which specifies all paths to pregenerate, and all other paths will lead to a 404 error
  // must contain a 'paths' key, whose value is an array. This array then has multiple objects that must have a 'params' key, whose value is an object
  return {
    fallback: false, // confirms whether paths has all supported values or not. False means that it contains all supprted value
    paths: [{ params: { meetslug: 'm1' } }, { params: { meetslug: 'm2' } }], // the URLkey meetslug must match folder name
  };
}

export async function getStaticProps(context) {
  // context is passed automatically, it contains a params key which contains the URL path matching the foldername
  const meetupId = context.params.meetslug;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: 'What',
        image:
          'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1710785271~exp=1710785871~hmac=57df0597a583af72601c3aca89b7b9f7aa2d4f1f9d3d02c63775d79ed744f297',
        description: 'No Way',
        address: 'New York',
      },
    },
  };
}
