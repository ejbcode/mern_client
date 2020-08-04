import React, { useContext, useReducer } from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";

import { TASK_PROJECTS, ADD_TASK, SHOW_ERROR_TASKFORM } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "name1", complete: true, projectId: 1 },
      { name: "name2", complete: false, projectId: 2 },
      { name: "name3", complete: true, projectId: 3 },
      { name: "name22", complete: false, projectId: 2 },
      { name: "name2222", complete: true, projectId: 2 },
      { name: "name111", complete: true, projectId: 1 },
      { name: "name2", complete: false, projectId: 2 },
      { name: "name33", complete: true, projectId: 3 },
      { name: "name22", complete: false, projectId: 2 },
      { name: "name222", complete: true, projectId: 2 },
    ],
    tasksProjects: [],
    errorTaskForm: false,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTaskProjects = (projectId) => {
    dispatch({
      type: TASK_PROJECTS,
      payload: projectId,
    });
  };

  const addNewTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const showErrorTaskForm = () => {
    dispatch({
      type: SHOW_ERROR_TASKFORM,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.task,
        tasksProjects: state.tasksProjects,
        errorTaskForm: state.errorTaskForm,
        getTaskProjects,
        addNewTask,
        showErrorTaskForm,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
