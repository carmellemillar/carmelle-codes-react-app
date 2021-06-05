import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import SignUpForm from "./components/SignUpForm";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import WebApp from "./pages/WebApp";
import LoginForm from "./components/LoginForm/LoginForm";
import Survey from "./pages/Survey/Survey";
import Answers from "./pages/Answers/Answers";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { isLoading } = useAuth();
  return isLoading ? (
    <h1>hold on, loading...</h1>
  ) : (
    <Router>
      <NavigationBar />

      <Switch>
        <Route path={ROUTES.SIGN_UP} component={SignUpForm} />
        <Route path={ROUTES.LOGIN} component={LoginForm} />
        <Route path={ROUTES.SURVEY} component={Survey} />
        <Route path={ROUTES.ANSWERS} component={Answers} />
        <PrivateRoute path={ROUTES.WEB_APP}>
          <WebApp />
        </PrivateRoute>
        <Route path={ROUTES.HOME} component={Hero} />
      </Switch>
    </Router>
  );
};

export default App;
