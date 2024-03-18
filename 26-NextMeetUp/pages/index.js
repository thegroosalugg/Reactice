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

export default function HomePage() {
  return <MeetupList meetups={DUMMY_DATA} />;
}
