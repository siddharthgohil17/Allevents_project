// AppNavbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../images/ae-logo-vector.png';
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
    <Navbar bg="body-tertiary" expand="lg" className="full-width-navbar">
      <Navbar.Brand href="#" className="mr-auto ml-3">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
      <Navbar.Collapse id="navbarNavAltMarkup">
        <Nav className="ml-auto mr-3">
          {!isLoggedIn ? (
            <>
              <Nav.Link onClick={handleLogin} className="nav-link">Login</Nav.Link>
              <Nav.Link onClick={handleSignup} className="nav-link">Sign Up</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="#" className="nav-link">+Create Event</Nav.Link>
              <Nav.Link href="#" className="nav-link">Profile</Nav.Link>
              <Nav.Link onClick={handleLogout} className="nav-link">Logout</Nav.Link>
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
