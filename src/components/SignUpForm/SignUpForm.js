import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { WEB_APP } from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const auth = useAuth();

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          auth.signup({
            email,
            password,
            callback: () => history.push(WEB_APP),
          });
          setEmail("");
          setPassword("");
        }}
      >
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
