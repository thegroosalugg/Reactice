export default function Sidebar({ projects, toggleForm, onProjectClick }) {
  return (
    <aside id="sidebar">
      <div className="ml-4">
        <h2
          className="text-2xl uppercase font-bold ml-3 mr-6 mt-4"
          style={{ width: "160px" }}
        >
          Projects
        </h2>
        <div className="mt-5 mb-2">
          <button
            className="text-base px-4 py-2 rounded-md bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-100"
            onClick={() => toggleForm(true)}
          >
            + Add Project
          </button>
        </div>
        <ul className="mt-3 max-h-60 overflow-auto">
          {projects.map((project, index) => (
            <li key={project.id}>
              <button
                className="p-1 mb-1 text-lg hover:text-stone-500"
                onClick={() => onProjectClick(project)}
              >
                {project.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
