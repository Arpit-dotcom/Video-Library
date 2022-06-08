import { NavLink } from "react-router-dom";
import "styles/sidebar.css";

export const Sidebar = () => {
  const categories = [
    { icons: "fas fa-home", text: "Home", path: "/" },
    { icons: "fas fa-compass", text: "Explore", path: "/videoListing" },
    { icons: "fas fa-list", text: "Playlist", path: "/playlist" },
    { icons: "far fa-clock", text: "Watch Later", path: "/watchLater" },
    { icons: "fas fa-thumbs-up", text: "Liked Videos", path: "/likedVideos" },
    { icons: "fas fa-history", text: "History", path: "/history" },
  ];

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <aside className="drawer">
      <ul className="sub-drawer stacked-list">
        {categories.map((category, index) => (
          <li className="list-item" key={index}>
            <NavLink
              className="link"
              to={category.path}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <i className={category.icons}></i>
              <span>{category.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
