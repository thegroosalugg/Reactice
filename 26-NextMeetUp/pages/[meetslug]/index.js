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
