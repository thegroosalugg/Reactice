export default function Input({ event, id, text, ...props }) {
  const Element = text ? "textarea" : "input"

  return (
    <p>
      <label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</label>
      <Element
        id={id}
        name={id}
        {...props}          // id will match a key stored in the event object, can be interpolated and accessed via square brackets []
        defaultValue={event ? event[`${id}`] : ""}
        required
      />
    </p>
  );
}
