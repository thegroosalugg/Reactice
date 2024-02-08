import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import Homepage from "./components/Homepage";
import ProjectView from "./components/ProjectView";

function App() {
  const [projects, setProjects] = useState([]);
  const [displayForm, setDisplay] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleAddProject(newProject) {
    setProjects((prevProjects) => [...prevProjects, newProject]);
    handleProjectClick(newProject); // saving form will directly go to the new project view
  }

  function handleDisplay(toggle) {
    // add project shows form, cancel button hides, thus parameter is passed with true or false per button
    setDisplay(toggle);
    setSelectedProject(null); // when adding a new project, selected project is cleared
  }

  function handleProjectClick(project) {
    setDisplay(false); // when called, form display set to false which will deactivate the form and home pages
    setSelectedProject(project);
  }

  function handleUpdateProject(updatedProject) {
    setProjects((prevProjects) =>
      prevProjects.map((proj) =>
        proj.id === updatedProject.id ? updatedProject : proj
      )
    );
    setSelectedProject(updatedProject); // rerended the component with the new task added inside project
  }

  function handleDeleteProject(project) {
    const updatedProjects = projects.filter((proj) => proj.id !== project.id)

    setProjects(updatedProjects);
    setDisplay(false);
    setSelectedProject(null);
  }

  return (
    <main className="md:h-screen flex gap-8">
      <Sidebar
        projects={projects}
        toggleForm={handleDisplay}
        onProjectClick={handleProjectClick}
      />
      {displayForm && (
        <NewProject addProject={handleAddProject} toggleForm={handleDisplay} />
      )}
      {!displayForm && !selectedProject && <Homepage />}
      {selectedProject && (
        <ProjectView
          project={selectedProject}
          updateProject={handleUpdateProject}
          deleteProject={handleDeleteProject}
        />
      )}
    </main>
  );
}

export default App;
