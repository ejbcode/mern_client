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
    case LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
      };

    case GET_USER:
      return { ...state, authenticated: true, user: action.payload };
    case LOGOUT:
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authenticated: null,
        message: action.payload,
      };

    default:
      return state;
  }
};
