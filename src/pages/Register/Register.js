import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { useHistory, useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import useAuth from "../../context/useAuth";

const Register = () => {
  const { signInUsingGoogle, createUser } = useAuth();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [name, setName] = useState([]);

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
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log("Name: ", e.target.value);
  };

  const handleSubmit = (e, name, email, password) => {
    e.preventDefault();
    createUser(name, email, password);
  };
  return (
    <div className="container text-center mt-5 login-section">
      <div>
        <h2>Sign Up</h2>
        <Form
          className="w-25 mx-auto mt-5"
          onSubmit={(e) => handleSubmit(e, name, email, password)}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onBlur={(e) => handleName(e)}
              type="text"
              placeholder="Your name"
            />
          </Form.Group>
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
          Already has an account? <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
