import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT } from "../../types";

const ProjectState = (props) => {
  const initialState = {
    projects: [
      { id: 1, name: "example1" },
      { id: 2, name: "example2" },
      { id: 3, name: "example3" },
    ],
    form: false,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const setForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  return (
    <projectContext.Provider
      value={{ projects: state.projects, form: state.form, setForm }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
