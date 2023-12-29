import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark Navbar">
      <div className="container">
        
        <div className="navbar-brand mb-0 h1 Navbar-brand">
          Welcome To News Portal Application
          <p className="mb-0 text-muted">Your Trusted Source for Up-to-date News</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
