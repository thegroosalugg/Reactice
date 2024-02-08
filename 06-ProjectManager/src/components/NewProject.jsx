import { useRef, useState } from "react";
import { formatName } from "../util/formatName";
import Input from "./Input";
import Button from "./Button";

export default function NewProject({ addProject, toggleForm }) {
  const [error, setError] = useState(null); // State to manage errors
  const projectName = useRef();
  const projectDesc = useRef();
  const projectDate = useRef();

  function formatDate(date) {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  }

  function handleSave() {
    const name = formatName(projectName.current.value);

    if (!name) {
      setError("Name field cannot be empty.");
      return;
    }

    if (name.length < 6 || name.length > 15) {
      setError("Name should be between 6 and 15 characters.");
      return;
    }

    if (!projectDate.current.value) {
      setError("Please select a date.");
      return;
    }

    setError(null); // Validation passed, clear error message

    const newProject = {
      id: Math.random(),
      name: name,
      desc: projectDesc.current.value.trim(),
      date: formatDate(projectDate.current.value),
      tasks: [],
    };

    addProject(newProject); // Use the addProject function passed as a prop
  }

  return (
    <div className="flex flex-col m-3" style={{ width: "800px" }}>
      <menu className="flex gap-3 justify-end p-3 mb-3">
        <Button name={"Cancel"} onClick={() => toggleForm(false)} />
        <Button name={"Save"} onClick={handleSave} />
      </menu>
      <div>
        <Input label={"Project Name"} ref={projectName} type="text" />
        <Input label={"Description"} ref={projectDesc} textarea type="text" />
        <Input label={"Due Date"} ref={projectDate} type="date" />
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </div>
  );
}
