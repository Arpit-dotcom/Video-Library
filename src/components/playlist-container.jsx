import { useWatchLater } from "contexts";
import { Link } from "react-router-dom";
import "styles/playlist-container.css";

export const PlaylistContainer = ({ video }) => {
  const { watchLaterDispatch } = useWatchLater();

  const deleteWatchLater = (video) => {
    watchLaterDispatch({ type: "DELETE_FROM_WATCH_LATER", payload: video });
  };

  return (
    <section className="card horizontal">
      <div className="container1">
        <section className="header">
          <p>{video.creator}</p>
          <h2 className="margin-top-0_5 title">{video.title}</h2>
          <small className="margin-top-0_5 description">
            {video.description}
          </small>
          <div className="margin-top-2 footer">
            <span className="view">
              <i className="fas fa-eye"></i>
              <span>{video.views}</span>
            </span>
            <span className="time">
              <i class="fas fa-clock"></i>
              <span>{video.time}</span>
            </span>
          </div>
        </section>

        <i
          class="cursor-pointer fas fa-times"
          onClick={() => deleteWatchLater(video)}
        ></i>

        <Link to={`/videoPlayer/${video.id}`}>
          <img
            class="img"
            src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="
            alt="video-poster"
          />
        </Link>
      </div>
    </section>
  );
};
