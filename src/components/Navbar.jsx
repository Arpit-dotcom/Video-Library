import React from "react";
import { Link } from "react-router-dom";
import "styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="simple-navigation">
        <a className="nav-list">
          <h1 className="text">Laugh Factory</h1>
        </a>

        <div className="nav-list">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/videoListing" className="nav-link">
            Explore
          </Link>
        </div>

        <input
          className="nav-search"
          type="text"
          placeholder="Search for product, brands and more"
        />

        <div className="nav-list">
          <div className="list-item icons">
            <Link to="/login" className="profile">
              <i className="fas fa-user"></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
