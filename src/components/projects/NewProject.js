import React, { useState } from "react";

const NewProject = () => {
  const [project, setProject] = useState({});

  const handleChangeName = (event) => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <button className="btn btn-block btn-primario" type="button">
        New Project
      </button>
      <form onSubmit={handleSubmit} className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Project"
          name="name"
          onChange={handleChangeName}
        />
        <input
          type="submit"
          value="New Project"
          className="btn btn-primario btn-block"
        ></input>
      </form>
    </>
  );
};

export default NewProject;
