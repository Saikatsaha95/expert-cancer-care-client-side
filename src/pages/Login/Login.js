import React from "react";
import { Form, Button } from "react-bootstrap";

import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import useAuth from "../../context/useAuth";

const Login = () => {
  const { signInUsingGoogle, user } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="container text-center mt-5">
      <div>
        <h2>Login Form</h2>
        <Form className="w-25 mx-auto mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
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
