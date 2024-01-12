// AppNavbar.js
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../images/ae-logo-white-vector.webp';
import './header.css';
import LoginForm from './Authentication/Login';
import SignupForm from './Authentication/Signup';

const AppNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLogin = () => {
    setShowLoginForm(true);
  };

  const handleSignup = () => {
    setShowSignupForm(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleCloseSignupForm = () => {
    setShowSignupForm(false);
  };

  return (
    <Navbar bg="#2E363F" expand="lg" className="full-width-navbar customchange">
      <Navbar.Brand href="#" className="mr-auto ml-3">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="ml-auto mr-3">
          {!isLoggedIn ? (
            <>
              <Nav.Link style={{ color: "#fff" }} onClick={handleLogin} className="nav-link">
                Login
              </Nav.Link>
              <Nav.Link style={{ color: "#fff" }} onClick={handleSignup} className="nav-link">
                Sign Up
              </Nav.Link>
            </>
          ) : (
            <>
              <Link to="/addevent" style={{ color: "#fff" }} className="nav-link">
                +Create Event
              </Link>
              <Nav.Link href="#" style={{ color: "#fff" }} className="nav-link">
                Profile
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>

      <LoginForm show={showLoginForm} handleClose={handleCloseLoginForm} />
      <SignupForm show={showSignupForm} handleClose={handleCloseSignupForm} />
    </Navbar>
  );
};

export default AppNavbar;
