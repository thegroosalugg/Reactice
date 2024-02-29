import { useParams } from 'react-router-dom';
import EventItem from '../components/EventItem';
import { EVENTS } from './Events';

export default function EventDetailPage() {
  const { eventId } = useParams();

  const event = EVENTS.find((event) => event.id === eventId);

  return <EventItem event={event} />;
}
