import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Projects from "./components/projects/Projects";
import ProjectState from "./context/project/ProjectState";
import TaskState from "./context/tasks/TaskState";
import AlertsState from "./context/alerts/AlertsState";
import AuthState from "./context/auth/AuthState";

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
                <Route exact path="/projects" component={Projects} />
              </Switch>
            </BrowserRouter>
          </AuthState>
        </AlertsState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
