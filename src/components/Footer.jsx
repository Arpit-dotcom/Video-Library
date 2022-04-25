import React from "react";
import "styles/Footer.css";

const contactLinks = [
  { link: "https://github.com/Arpit-dotcom/", icon: "fab fa-github" },
  { link: "https://twitter.com/Arpit_00_02", icon: "fab fa-twitter" },
  {
    link: "https://www.linkedin.com/in/arpit-kumar-4b11211a4/",
    icon: "fab fa-linkedin-in",
  },
];
const Footer = () => {
  return (
    <footer className="main-footer">
      <h2 className="footer-header">CONTACT US</h2>

      <div className="footer-link">
        {contactLinks.map((contactLink, index) => (
          <a
            className="link"
            href={contactLink.link}
            target="_blank"
            key={index}
          >
            <i className={contactLink.icon}></i>
          </a>
        ))}
      </div>
    </footer>
  );
};

export { Footer };
