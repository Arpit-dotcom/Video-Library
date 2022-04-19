export const Sidebar = () => {
  const categories = [
    { icons: "fas fa-home", text: "Home" },
    { icons: "fas fa-compass", text: "Explore" },
    { icons: "fas fa-list", text: "Playlist" },
    { icons: "far fa-clock", text: "Watch Later" },
    { icons: "fas fa-thumbs-up", text: "Liked Videos" },
    { icons: "fas fa-history", text: "History" },
  ];

  return (
    <aside className="drawer">
      <ul className="sub-drawer stacked-list">
        {categories.map((category, index) => (
          <li className="list-item" key={index}>
            <div>
              <i className={category.icons}></i>
              <span>{category.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};
