import { useHistory, useLikedVideo, useWatchLater } from "contexts";
import { Link, useLocation } from "react-router-dom";
import "styles/playlist-container.css";

export const PlaylistContainer = ({ video }) => {
  const { pathname } = useLocation();
  const { historyDispatch } = useHistory();
  const { watchLaterDispatch } = useWatchLater();
  const { likedVideoDispatch } = useLikedVideo();

  const deleteWatchLater = (video) => {
    watchLaterDispatch({ type: "DELETE_FROM_WATCH_LATER", payload: video });
  };

  const deleteLikedVideo = (video) => {
    likedVideoDispatch({ type: "DELETE_FROM_LIKED_VIDEO", payload: video });
  };

  const deleteHistory = (video) => {
    historyDispatch({ type: "DELETE_FROM_HISTORY", payload: video });
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
              <i className="fas fa-clock"></i>
              <span>{video.time}</span>
            </span>
          </div>
        </section>

        {pathname === "/watchLater" && (
          <i
            className="cursor-pointer fas fa-times"
            onClick={() => deleteWatchLater(video)}
          ></i>
        )}

        {pathname === "/likedVideos" && (
          <i
            className="cursor-pointer fas fa-times"
            onClick={() => deleteLikedVideo(video)}
          ></i>
        )}

        {pathname === "/history" && (
          <i
            className="cursor-pointer fas fa-times"
            onClick={() => deleteHistory(video)}
          ></i>
        )}

        <Link to={`/videoPlayer/${video.id}`}>
          <img
            className="img"
            src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="
            alt="video-poster"
          />
        </Link>
      </div>
    </section>
  );
};
