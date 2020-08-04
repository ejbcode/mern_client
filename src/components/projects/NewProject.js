import React, { useState, useContext } from "react";
import projectContext from "../../context/project/projectContext";

const NewProject = () => {
  const projectsContext = useContext(projectContext);
  const {
    form,
    formError,
    setForm,
    addProject,
    showErrorForm,
  } = projectsContext;

  const [project, setProject] = useState({
    name: "",
  });

  const handleChangeName = (event) => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (project.name === "") {
      showErrorForm();
      return;
    }
    addProject(project);
    setProject({ name: "" });
  };

  return (
    <>
      <button
        onClick={() => setForm()}
        className="btn btn-block btn-primario"
        type="button"
      >
        New Project
      </button>
      {form ? (
        <form onSubmit={handleSubmit} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Project"
            name="name"
            onChange={handleChangeName}
            value={project.name}
          />
          <input
            type="submit"
            value="New Project"
            className="btn btn-primario btn-block"
          ></input>
        </form>
      ) : null}
      {formError ? (
        <p className="mensaje error">The project´s name is requiered</p>
      ) : null}
    </>
  );
};

export default NewProject;
