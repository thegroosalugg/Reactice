export default function Button({ text, label, ...props }) {
  return <button className={text ? "text-button" : "button"} {...props}>{label}</button>;
}
