import { Link } from "react-router-dom";

export const VideoCard = ({
  id,
  poster,
  image,
  title,
  views,
  days,
  time,
  creator,
}) => {
  return (
    <section className="card badge-card" key={id}>
      <button className="timing">{time}</button>
      <Link to={`/videoPlayer/${id}`}>
        <img className="img" src={poster} alt="card-poster" />
      </Link>
      <div className="card-text">
        <section className="avatar flex">
          <span className="round-avatar">
            <img className="round sm" src={image} alt="avatar-image" />
          </span>
          <span>
            <h4 className="title">{title}</h4>
            <small>{creator}</small>
            <div>
              <small className="card-view">
                <i className="fas fa-eye"></i>
                {views}
              </small>
              <small>
                <i className="far fa-dot-circle"></i>
                {days}
              </small>
            </div>
          </span>
        </section>
      </div>
    </section>
  );
};
