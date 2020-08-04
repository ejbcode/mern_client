import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/project/projectContext";

const ListOfProjects = () => {
  const { projects, getProjects } = useContext(projectContext);
  /* eslint-disable */
  useEffect(() => {
    getProjects();
  }, []);
  /* eslint-enable */
  if (projects.length === 0) return <p>No project, create one</p>;

  return (
    <ul className="listado-proyectos">
      {projects.map((item) => (
        <Project key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ListOfProjects;
