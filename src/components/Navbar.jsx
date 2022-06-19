import { useAuth } from "contexts";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { MobileSidebar } from "components";

const Navbar = () => {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <>
      <nav className="simple-navigation">
        {mobileSidebar && <MobileSidebar setMobileSidebar={setMobileSidebar} />}
        <span className="nav-list">
          <FaBars
            className="hamburger-icon"
            onClick={() => setMobileSidebar((prev) => !prev)}
          />
          <h1 className="text">Laugh Factory</h1>
          <div className="nav-list-link">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/explore" className="nav-link">
              Explore
            </Link>
          </div>
        </span>

        {/* <input
          className="nav-search"
          type="text"
          placeholder="Search for product, brands and more"
        /> */}

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
