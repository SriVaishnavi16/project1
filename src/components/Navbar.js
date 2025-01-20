import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  // Retrieve user data from localStorage
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;
  console.log(user); // For debugging purposes

  // Logout handler
  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    
    // Redirect to landing page
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          CollabTool
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                </ul>
            {user ? (
                <ul className="navbar-nav">
                <li className="nav-item">
                  <button className="btn btn-danger nav-link" onClick={handleLogout}>
                    {user.username} Logout
                  </button>
                </li>
              </ul>
            ) : (
                <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;