import React, { useContext, useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import axiosClient from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
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

  const singupUser = async (dataUser) => {
    try {
      const response = await axiosClient.post("/api/users", dataUser);
      dispatch({
        type: SIGNUP,
        payload: response.data,
      });

      userAuth();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({
        type: SIGNUP_ERROR,
        payload: alert,
      });
    }
  };

  const userAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const response = await axiosClient.get("/api/auth");
      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const loginInit = async (dataUser) => {
    try {
      const response = await axiosClient.post("/api/auth", dataUser);
      dispatch({
        type: LOGIN,
        payload: response.data,
      });
      userAuth();
    } catch (error) {
      console.log(error.response.data.msg);
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({
        type: LOGIN_ERROR,
        payload: alert,
      });
    }
  };

  const logOut = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        singupUser,
        loginInit,
        userAuth,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
