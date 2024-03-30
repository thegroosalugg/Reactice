// id key needs to be assigned in parent where this is called, so not used here
const ToDo: React.FC<{ text: string; onDelete: () => void }> = ({ text, onDelete }) => {
  return (
    <li>
      <p>{text}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default ToDo;
