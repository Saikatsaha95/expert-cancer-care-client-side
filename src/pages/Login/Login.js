import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import useAuth from "../../context/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, signInUsingEmail } = useAuth();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log("Email: ", e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    console.log("password: ", e.target.value);
  };

  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    signInUsingEmail(email, password).then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="container text-center mt-5 ">
      <div className="login-section">
        <h2>Login Form</h2>
        <Form
          className="w-25 mx-auto mt-5"
          onSubmit={(e) => handleSubmit(e, email, password)}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onBlur={(e) => handleEmail(e)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onBlur={(e) => handlePassword(e)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <div>------------Or------------</div>
        <Button
          className="w-25 mb-3"
          onClick={handleGoogleSignIn}
          variant="danger"
        >
          Google sign in
        </Button>
        <p>
          New at Expert Cancer Care?{" "}
          <NavLink to="/register">Create an account</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
