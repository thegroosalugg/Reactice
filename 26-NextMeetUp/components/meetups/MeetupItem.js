import { useRouter } from 'next/navigation';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter(); // import Next Router

  function gotoDetailsPage() { // navigate programatically via button
    router.push('/' + props.id); // push pushes a page onto a stack of pages. It is a programatic equivalent of Link
    // dynamic path ID constructed via root path where the slug exists, and props.id will be the id key of the meetup passed from parent
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={gotoDetailsPage}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
