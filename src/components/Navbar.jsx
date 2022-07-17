import { useAuth, useVideoListing } from "contexts";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { MobileSidebar } from "components";
import { debounce } from "lodash";

const Navbar = () => {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const { isLoggedIn } = useAuth();
  const { videoDispatch } = useVideoListing();
  const { pathname } = useLocation();

  const searchHandler = debounce((event) => {
    videoDispatch({ type: "SET_SEARCH_CATEGORY", payload: event.target.value });
  }, 1000);

  return (
    <>
      <nav className="simple-navigation">
        {mobileSidebar && <MobileSidebar setMobileSidebar={setMobileSidebar} />}
        <span className="nav-list">
          <FaBars
            className="hamburger-icon"
            onClick={() => setMobileSidebar((prev) => !prev)}
          />
          <Link to="/" className="text">
            Laugh Factory
          </Link>
        </span>

        {pathname === "/explore" && (
          <input
            className="nav-search"
            type="text"
            placeholder="Search..."
            onChange={(e) => searchHandler(e)}
          />
        )}

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
