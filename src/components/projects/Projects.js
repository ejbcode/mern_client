import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import TopRow from "../layout/TopRow";
import TaskForm from "../tasks/TaskForm";
import ListOfTasks from "../tasks/ListOfTasks";
import AuthContext from "../../context/auth/AuthContext";

const Projects = () => {
  const { userAuth } = useContext(AuthContext);

  useEffect(() => {
    userAuth();
  }, []); //eslint-disable-line

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <TopRow />
        <main>
          <TaskForm />

          <div className="contenedor-tareas">
            <ListOfTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
