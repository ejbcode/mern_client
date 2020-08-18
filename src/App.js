import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";
import ProjectState from "./context/project/ProjectState";
import TaskState from "./context/tasks/TaskState";
import AlertsState from "./context/alerts/AlertsState";
import AuthState from "./context/auth/AuthState";
import tokenAuth from "./config/tokenAuth";
import PrivateRoute from "./components/routes/PrivateRoute";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertsState>
          <AuthState>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/new-account" component={NewAccount} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </BrowserRouter>
          </AuthState>
        </AlertsState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
