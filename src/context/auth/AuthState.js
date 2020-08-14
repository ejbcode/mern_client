import React, { useContext, useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import {
  SIGNUP,
  SIGNUP_ERROR,
  GET_USER,
  LOGIN,
  LOGIN_ERROR,
  LOGOUT,
} from "../../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
