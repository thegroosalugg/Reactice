export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 uppercase font-semibold rounded text-white bg-amber-400 hover:bg-cyan-500"
      {...props}
    >
      {children}
    </button>
  );
}
