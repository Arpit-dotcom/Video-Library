import { useAuth } from "contexts";
import React from "react";
import { Link } from "react-router-dom";
import "styles/Navbar.css";
import { useSearchBar } from "utils";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const {searchHandler, searchInput} = useSearchBar();
  
  return (
    <>
      <nav className="simple-navigation">
        <span className="nav-list">
          <h1 className="text">Laugh Factory</h1>
          <div className="nav-list-link">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/videoListing" className="nav-link">
              Explore
            </Link>
          </div>
        </span>

        <input
          className="nav-search"
          type="text"
          value={searchInput}
          placeholder="Search for product, brands and more"
          onChange={(event) => searchHandler(event)}
        />

        <div className="nav-list">
          <div className="list-item icons">
            <Link to={!isLoggedIn ? "/login" : "/logout"} className="profile">
              <i className="fas fa-user"></i>
              <small className="nav-icon-text">
                {!isLoggedIn ? "Login" : "Logout"}
              </small>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
