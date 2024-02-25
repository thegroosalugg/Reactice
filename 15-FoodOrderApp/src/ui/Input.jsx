export default function Input({ label, id, type = "text"}) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} required />
    </p>
  )
}
