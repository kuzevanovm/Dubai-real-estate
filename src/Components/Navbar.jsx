import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Dubai Realty" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/BUY">BUY</Link></li>
        <li><Link to="/ABOUT">ABOUT</Link></li>
        <li><Link to="/CONTACT">CONTACT</Link></li>
      </ul>
      <button className="btn-primary">Book a consultation</button>
      <p>+7 (212) 674-25-10</p>
    </nav>
  );
}

export default Navbar;
