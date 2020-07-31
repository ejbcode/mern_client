import React from "react";
import Project from "./Project";

const ListOfProjects = () => {
  const projects = [
    { name: "example1" },
    { name: "example2" },
    { name: "example3" },
  ];

  return (
    <ul className="listado-proyectos">
      {projects.map((item, i) => (
        <Project key={i} {...item} />
      ))}
    </ul>
  );
};

export default ListOfProjects;
