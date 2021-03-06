import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import axiosClient from "../../config/axios";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  SHOW_ERROR_FORM,
  SELECT_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "example1" },
    { id: 2, name: "example2" },
    { id: 3, name: "example6" },
  ];

  const initialState = {
    projects: [],
    form: false,
    formError: false,
    currentproject: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const setForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = async (project) => {
    try {
      const result = await axiosClient.post("/api/projects", project);
      dispatch({
        type: ADD_PROJECT,
        payload: result.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const showErrorForm = () => {
    dispatch({
      type: SHOW_ERROR_FORM,
    });
  };

  const selectProject = (projectId) => {
    dispatch({
      type: SELECT_PROJECT,
      payload: projectId,
    });
  };

  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        formError: state.formError,
        currentproject: state.currentproject,
        setForm,
        getProjects,
        addProject,
        showErrorForm,
        selectProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
