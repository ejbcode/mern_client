import React, { useContext } from "react";
import TaskContext from "../../context/tasks/TaskContext";
import projectContext from "../../context//project/projectContext";

const Task = ({ task }) => {
  const {
    deleteTask,
    getTaskProjects,
    taskComplete,
    getCurrentTask,
  } = useContext(TaskContext);
  const { currentproject } = useContext(projectContext);
  const handleDeleteClick = () => {
    deleteTask(task.id);
    getTaskProjects(currentproject[0].id);
  };

  const handleCompleteClick = () => {
    task.complete = !task.complete;
    taskComplete(task);
  };

  const handleEditClick = () => {
    getCurrentTask(task);
    console.log(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.complete ? (
          <button
            type="button"
            className="completo"
            onClick={() => handleCompleteClick()}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => handleCompleteClick(task)}
          >
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={handleEditClick}
        >
          Edit
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
