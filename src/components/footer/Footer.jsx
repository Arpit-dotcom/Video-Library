import React from "react";
import "../../styles/Footer.css";

const Footer = () => (
  <footer className="main-footer">
    <h2 className="footer-header">CONTACT US</h2>

    <div className="footer-link">
      <a
        className="link"
        href="https://github.com/Arpit-dotcom/"
        target="_blank"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        className="link"
        href="https://twitter.com/Arpit_00_02"
        target="_blank"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        className="link"
        href="https://www.linkedin.com/in/arpit-kumar-4b11211a4/"
        target="_blank"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </footer>
);

export { Footer };
