import {
  TASK_PROJECTS,
  ADD_TASK,
  SHOW_ERROR_TASKFORM,
  DELETE_TASK,
  TASK_COMPLETE,
  CURRENT_TASK,
  EDIT_TASK,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASK_PROJECTS:
      return {
        ...state,
        tasksProjects: state.tasks.filter(
          (item) => item.projectId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errorTaskForm: false,
      };

    case SHOW_ERROR_TASKFORM:
      return {
        ...state,
        errorTaskForm: true,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };

    case TASK_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload ? action.payload : item
        ),
      };

    case CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };

    case EDIT_TASK:
      console.log(action.payload);
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    default:
      return state;
  }
};
