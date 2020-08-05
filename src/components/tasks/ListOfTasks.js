import React, { useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/project/projectContext";
import TaskContext from "../../context/tasks/TaskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListOfTasks = () => {
  const { currentproject, deleteProject } = useContext(projectContext);
  const { tasksProjects } = useContext(TaskContext);
  if (!currentproject) return <h2>Select a Project</h2>;

  return (
    <>
      <h2>Project: {currentproject[0].name}</h2>
      <ul className="listado-tareas">
        {tasksProjects.length === 0 ? (
          <li className="tarea">
            <p>No task asigment</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksProjects.map((task) => (
              <CSSTransition key={task.id} timeout={400} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => deleteProject(currentproject[0].id)}
      >
        Delete Project &times
      </button>
    </>
  );
};

export default ListOfTasks;
