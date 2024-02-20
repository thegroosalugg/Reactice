export default function Input({ id, error, ...props }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{id.toUpperCase()}</label>
      <input id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
