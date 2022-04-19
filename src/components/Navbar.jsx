import React from "react";
import "styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="simple-navigation">
        <a className="nav-list">
          <i className="fas fa-bars"></i>
          <h1 className="text">Video Library</h1>
        </a>

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
