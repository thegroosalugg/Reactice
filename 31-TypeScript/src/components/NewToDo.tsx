import { useContext, useRef, useState } from 'react';
import { TodosContext } from '../store/ToDosContext';

const NewToDo: React.FC = () => {
  const inputText = useRef<HTMLInputElement>(null); // TS requires ref to select and HTML element for type and set an initial value
  const [error, setError] = useState<string>(); // state type set to string
  const { addToDo } = useContext(TodosContext);

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
    inputText.current!.value ='';
  };

  return (
    <>
      <form className='form' onSubmit={submitHandler}>
        <label htmlFor='text'>Todo</label>
        <input type='text' id='text' ref={inputText} />
        <button>Add (+)</button>
      </form>
      {error && <p className='error'>{error}</p>}
    </>
  );
};

export default NewToDo;
