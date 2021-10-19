import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            Expert Cancer Care
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/aboutus">
                About Us
              </NavLink>
              <NavLink className="nav-link" to="/allservices">
                Services
              </NavLink>
              <NavLink className="nav-link" to="/treatments">
                Treatments
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
