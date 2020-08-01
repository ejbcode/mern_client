import React, { useContext } from "react";
import Project from "./Project";
import projectContext from "../../context/project/projectContext";

const ListOfProjects = () => {
  const { projects } = useContext(projectContext);
  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {projects.map((item) => (
        <Project key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ListOfProjects;
