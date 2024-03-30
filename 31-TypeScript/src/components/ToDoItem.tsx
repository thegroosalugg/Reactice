// id key needs to be assigned in parent where this is called, so not used here
const ToDo: React.FC<{ text: string }> = ({ text }) => {
  return (
    <li>
      <p>{text}</p>
      <button>Delete</button>
    </li>
  );
};

export default ToDo;
