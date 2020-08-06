import React, { useContext, useReducer } from "react";
import TaskContext from "./TaskContext";
import TaskReducer from "./TaskReducer";
import { v4 as uuidv4 } from "uuid";

import {
  TASK_PROJECTS,
  ADD_TASK,
  SHOW_ERROR_TASKFORM,
  DELETE_TASK,
  TASK_COMPLETE,
  CURRENT_TASK,
  EDIT_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 0, name: "name1", complete: true, projectId: 1 },
      { id: 1, name: "borrar2", complete: false, projectId: 2 },
      { id: 2, name: "name3", complete: true, projectId: 3 },
      { id: 3, name: "name22", complete: false, projectId: 2 },
      { id: 4, name: "name2222", complete: true, projectId: 2 },
      { id: 5, name: "name111", complete: true, projectId: 1 },
      { id: 6, name: "name2", complete: false, projectId: 2 },
      { id: 7, name: "name33", complete: true, projectId: 3 },
      { id: 8, name: "name22", complete: false, projectId: 2 },
      { id: 9, name: "name222", complete: true, projectId: 2 },
    ],
    tasksProjects: [],
    errorTaskForm: false,
    currentTask: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const getTaskProjects = (projectId) => {
    dispatch({
      type: TASK_PROJECTS,
      payload: projectId,
    });
  };

  const addNewTask = (task) => {
    task.id = uuidv4();
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

  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  const taskComplete = (task) => {
    dispatch({
      type: TASK_COMPLETE,
      payload: task,
    });
  };

  const getCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task,
    });
  };

  const editTask = (currentTask) => {
    console.log(currentTask);
    dispatch({
      type: EDIT_TASK,
      payload: currentTask,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.task,
        tasksProjects: state.tasksProjects,
        errorTaskForm: state.errorTaskForm,
        currentTask: state.currentTask,
        getTaskProjects,
        addNewTask,
        showErrorTaskForm,
        deleteTask,
        taskComplete,
        getCurrentTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
