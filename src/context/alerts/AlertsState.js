import React, { useReducer } from "react";
import AlertsContext from "./AlertsContext";
import AlertsReducer from "./AlertsReducer";
import { SHOW_ALERTS, HIDE_ALERTS } from "../../types";

const AlertsState = (props) => {
  //first create te initial sta that always going to be an object
  const initialState = {
    alert: null,
  };

  // Second, create the dispatch and state. Previously import useReducer that take 2 params, ** the reducer and the initialState**
  const [state, dispatch] = useReducer(AlertsReducer, initialState);

  const showAlerts = (msg, category) => {
    dispatch({
      type: SHOW_ALERTS,
      payload: {
        msg: msg,
        category,
      },
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_ALERTS,
      });
    }, 5000);
  };

  return (
    <AlertsContext.Provider
      value={{
        alert: state.alert,
        showAlerts,
      }}
    >
      {props.children}
    </AlertsContext.Provider>
  );
};

export default AlertsState;
