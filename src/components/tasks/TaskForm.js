import React, { useState, useContext, useEffect } from "react";
import projectContext from "../../context/project/projectContext";
import TaskContext from "../../context/tasks/TaskContext";

const TaskForm = () => {
  const { currentproject } = useContext(projectContext);
  const {
    errorTaskForm,
    currentTask,
    addNewTask,
    showErrorTaskForm,
    getTaskProjects,
    editTask,
  } = useContext(TaskContext);

  useEffect(() => {
    if (!currentTask) return;
    setTaskName(currentTask.name);
  }, [currentTask]);

  const [taskName, setTaskName] = useState("");
  if (!currentproject) return null;
  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName === "") {
      showErrorTaskForm();
      return;
    }
    const task = {
      name: taskName,
      complete: false,
      projectId: currentproject[0].id,
    };

    if (!currentTask) {
      addNewTask(task);
    } else {
      editTask(task);
    }
    getTaskProjects(currentproject[0].id);
    setTaskName("");
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            name="name"
            placeholder="Task´s Name"
            className="input-text"
            value={taskName}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value={currentTask ? "Edit" : "Add Task"}
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
        {errorTaskForm ? (
          <p className="mensaje error">Name´s project is required</p>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;
