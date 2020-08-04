import { TASK_PROJECTS, ADD_TASK, SHOW_ERROR_TASKFORM } from "../../types";

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
        tasks: [...state.tasks, action.payload],
        errorTaskForm: false,
      };

    case SHOW_ERROR_TASKFORM:
      return {
        ...state,
        errorTaskForm: true,
      };

    default:
      return state;
  }
};
