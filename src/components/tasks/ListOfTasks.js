import React from "react";
import Task from "./Task";

const ListOfTasks = () => {
  const tasksProjects = [
    { name: "name1", complete: true },
    { name: "name2", complete: false },
    { name: "name2", complete: true },
  ];
  return (
    <>
      <h2>Project: Example Text</h2>
      <ul className="listado-tareas">
        {tasksProjects.length === 0 ? (
          <li className="tarea">
            <p>No task asigment</p>
          </li>
        ) : (
          tasksProjects.map((task, i) => <Task key={i} {...task} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete Project &times
      </button>
    </>
  );
};

export default ListOfTasks;
