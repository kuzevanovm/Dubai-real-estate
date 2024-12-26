import React from 'react';
import logo from '../images/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="footer-logo-container">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-line" />
      <div className="footer-content">
        <p>Copyright © 2022 Dubai Realty</p>
      </div>
    </footer>
  );
};

export default Footer;
