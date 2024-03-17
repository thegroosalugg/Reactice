import css from "./image-picker.module.css";

export default function Input({ text, id, label, message, ...props }) {
  const Element = text ? 'textarea' : 'input';

  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <Element
        type={id === 'email' ? 'email' : 'text'}
        id={id}
        name={id}
        {...props}
        required
      />
      {message && <span className={css.error}>{message}</span>}
    </p>
  );
}
