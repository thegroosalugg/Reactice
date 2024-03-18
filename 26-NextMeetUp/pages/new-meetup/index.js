import NewMeetupForm from "@/components/meetups/NewMeetupForm";

// NeW Meet Up Folder. Root index page

export default function NewMeetUpPage() {
  function handleAddMeetUp(data) {
    console.log(data)
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetUp} />
}
