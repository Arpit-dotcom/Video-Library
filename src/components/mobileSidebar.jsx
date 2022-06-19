import { FaUserAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useAuth } from "contexts";

export const MobileSidebar = ({ setMobileSidebar }) => {
  const { isLoggedIn } = useAuth();

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <section className="mobile-sidebar">
      <div className="mobile-sidebar-container">
        <h2 className="heading">
          <FaUserAlt className="user" />
          Welcome
          <AiOutlineClose
            className="close"
            onClick={() => setMobileSidebar((prev) => !prev)}
          />
        </h2>
        <ul className="list">
          <NavLink
            to={!isLoggedIn ? "/login" : "/logout"}
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {!isLoggedIn ? "Login" : "Logout"}
          </NavLink>
          <NavLink
            to="/"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Explore
          </NavLink>
          <NavLink
            to="/playlist"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Playlist
          </NavLink>
          <NavLink
            to="/watchLater"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Watch Later
          </NavLink>
          <NavLink
            to="/likedVideos"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Liked Videos
          </NavLink>
          <NavLink
            to="/history"
            className="list-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            History
          </NavLink>
        </ul>
      </div>
    </section>
  );
};
