import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

// NeW Meet Up Folder. Root index page

export default function NewMeetUpPage() {
  const router = useRouter();

  async function handleAddMeetUp(formData) {
    // send to URL with external API, but here it is internal, so it takes API folder path/name of nested folder (same as current folder also)
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    console.log(data);

    router.replace('/'); // replace is like push, redirects, but ensures we cannot click back button
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetUp} />;
}
