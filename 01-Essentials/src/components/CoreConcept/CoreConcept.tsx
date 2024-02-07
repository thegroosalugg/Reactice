// @ts-nocheck  // removes annoying parameter any type messages for file
import './CoreConcept.css'

export default function CoreConcept({image, title, description}) {
  // object converted via destructuring
  return (
    // equivalent to parameter props.title etc.
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
