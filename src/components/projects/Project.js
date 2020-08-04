import React, { useContext } from "react";
import projectContext from "../../context/project/projectContext";
import TaskContext from "../../context/tasks/TaskContext";

const Project = (project) => {
  const { selectProject } = useContext(projectContext);
  const { getTaskProjects } = useContext(TaskContext);

  const handleClick = () => {
    selectProject(project.id);
    getTaskProjects(project.id);
  };

  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={handleClick}>
        {project.name}
      </button>
    </li>
  );
};

export default Project;
