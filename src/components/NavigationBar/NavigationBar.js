import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import * as ROUTES from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";

const NavigationBar = () => {
  const auth = useAuth();
  return (
    <header className="NavigationBar">
      <nav>
        <ul>
          <Link to={ROUTES.HOME}>
            <li>Home</li>
          </Link>
          {auth.user ? (
            <>
              <Link to={ROUTES.WEB_APP}>
                <li>Open web app</li>
              </Link>
              <li onClick={() => auth.signout()}>Sign Out</li>
            </>
          ) : (
            <>
              <Link to={ROUTES.SIGN_UP}>
                <li>Sign Up</li>
              </Link>
              <Link to={ROUTES.LOGIN}>
                <li>Login</li>
              </Link>
              <Link to={ROUTES.SURVEY}>
                <li>Survey</li>
              </Link>
              <Link to={ROUTES.ANSWERS}>
                <li>Answers</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
