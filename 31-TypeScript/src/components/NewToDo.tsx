import { useRef, useState } from 'react';

// FC type declared is a function that takes a  string as an argument and does not return any valud (void)
const NewToDo: React.FC<{ addToDo: ( text: string ) => void }>  = ({ addToDo }) => {
  const inputText = useRef<HTMLInputElement>(null); // TS requires ref to select and HTML element for type and set an initial value
  const [error, setError] = useState<string>(); // state type set to string


  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // in TS, current is followed by ? when the value could be null, or ! if the value is guaranteed
    const formData = inputText.current!.value;

    if (formData.trim().length === 0) {
      setError("Field can't be empty");
      return;
    }

    setError('');
    addToDo(formData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor='text'>Todo</label>
        <input type='text' id='text' ref={inputText} />
        <button>Add (+)</button>
      </form>
      {error && <p className='error'>{error}</p>}
    </>
  );
};

export default NewToDo;
