import {
  SIGNUP,
  SIGNUP_ERROR,
  GET_USER,
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
      };

    default:
      return state;
  }
};
