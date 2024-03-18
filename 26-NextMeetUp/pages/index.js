import MeetupList from '@/components/meetups/MeetupList';

// ROOT PAGE. It all starts here

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Dummy',
    image:
      'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1710785271~exp=1710785871~hmac=57df0597a583af72601c3aca89b7b9f7aa2d4f1f9d3d02c63775d79ed744f297',
    address: '123 Fake Street',
    description: 'Some dummy data',
  },
  {
    id: 'm2',
    title: 'Skeleton',
    image:
      'https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg?w=1060&t=st=1710785292~exp=1710785892~hmac=8f786deefb7628bdb570d9d184475554016ff40d68bcdfc69df96fd84f267830',
    address: '1999 East',
    description: 'Some skeletal data',
  },
];

// props object is received directly from getStaticProps below, otherwise no data would have been passed
export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// Reserved function name. Pages Router component, obsolete in App Router. It calls this function before it calls the component.
// contains the initial data this page needs. UseEffect runs AFTER the component renders once, thus initial data is missing, affecting SEO
// executed during the build process, not on the server or client, so the code is protected
export async function getStaticProps() {
  // fetch data for API

  // must return an object with a PROPS key, this then holds another object with the data we want
  return {
    props: { meetups: DUMMY_DATA },
    revalidate: 10, // number of seconds before NextJS regenerates this page for an incoming request
  }; // this ensures that when new data is added, the page fetches it and displays the data, i.e. user submitted content
}
