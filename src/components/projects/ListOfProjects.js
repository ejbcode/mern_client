import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/project/projectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
      <TransitionGroup>
        {projects.map((item) => (
          <CSSTransition key={item.id} timeout={400} classNames="proyecto">
            <Project {...item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListOfProjects;
