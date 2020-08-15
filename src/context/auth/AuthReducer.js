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
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
      };

    case GET_USER:
      return { ...state, user: action.payload };

    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        message: action.payload,
      };

    default:
      return state;
  }
};
