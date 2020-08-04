import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  SHOW_ERROR_FORM,
  SELECT_PROJECT,
  DELETE_PROJECT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        formError: false,
      };

    case SHOW_ERROR_FORM:
      return {
        ...state,
        formError: true,
      };

    case SELECT_PROJECT:
      return {
        ...state,
        currentproject: state.projects.filter(
          (item) => item.id === action.payload
        ),
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((item) => item.id !== action.payload),
        currentproject: null,
      };

    default:
      return state;
  }
};
