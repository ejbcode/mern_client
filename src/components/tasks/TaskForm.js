import React from "react";

const TaskForm = () => {
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            name="name"
            placeholder="Task´s Name"
            className="input-text"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value="Add task"
            className="btn btn-primario btn-submit btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
