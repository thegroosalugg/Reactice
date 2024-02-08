export default function Button({ name, ...props }) {
  return (
      <button
        className="font-semibold py-2 rounded-xl hover:bg-stone-900 hover:text-stone-50"
        style={{ minWidth: "5rem" }}
        {...props}      >
        {name}
      </button>
  );
}
