import "styles/playlist-container.css";

export const PlaylistContainer = ({ creator, title, views, time, image }) => {
  return (
    <section className="card horizontal">
      <div className="container1">
        <section className="header">
          <p>{creator}</p>
          <h2 className="margin-top-0_5">{title}</h2>
          <small className="margin-top-0_5 description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
            nesciunt, excepturi eius necessitatibus, omnis sint autem
            perferendis maiores architecto minus, harum ipsa rerum sit
            recusandae doloribus. Velit commodi voluptatem minus.
          </small>
          <div className="margin-top-2 footer">
            <span className="view">
              <i className="fas fa-eye"></i>
              <span>{views}</span>
            </span>
            <span className="time">
              <i class="fas fa-clock"></i>
              <span>{time}</span>
            </span>
          </div>
        </section>

        <i class="fas fa-times"></i>

        <img class="img" src={image} alt="" />
      </div>
    </section>
  );
};
