import React from "react";
import "styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="simple-navigation">
        <a className="nav-list">
          <h1 className="text">Laugh Factory</h1>
        </a>

        <div className="nav-list">
          <h3 className="nav-link">Home</h3>
          <h3 className="nav-link">Explore</h3>
        </div>

        <input
          className="nav-search"
          type="text"
          placeholder="Search for product, brands and more"
        />

        <div className="nav-list">
          <div className="list-item icons">
            <a className="notification">
              <i className="fas fa-bell"></i>
            </a>

            <a className="profile">
              <i className="fas fa-user"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
