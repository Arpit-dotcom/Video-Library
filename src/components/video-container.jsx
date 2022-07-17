import { useAuth } from "contexts";
import { Link, useLocation } from "react-router-dom";
import "styles/playlist-container.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { removeFromLiked } from "slice/likeSlice";
import { removeFromWatchLater } from "slice/watchLaterSlice";
import { removeFromHistory } from "slice/history";

export const VideoContainer = ({ video }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { token } = useAuth();

  const deleteWatchLater = async () => {
    const videoId = video._id;
    dispatch(removeFromWatchLater({ videoId, token }));
    toast.error("Video removed from watch later");
  };

  const deleteLikedVideo = async () => {
    const videoId = video._id;
    dispatch(removeFromLiked({ videoId, token }));
    toast.error("Video removed from liked videos");
  };

  const deleteHistory = async () => {
    const videoId = video._id;
    dispatch(removeFromHistory({videoId,token}));
    toast.error("Video removed from history");
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
          <div className="margin-top-1_5 footer">
            <span className="view">
              <i className="fas fa-eye"></i>
              <span>{video.views} views</span>
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
            onClick={() => deleteWatchLater()}
          ></i>
        )}

        {pathname === "/likedVideos" && (
          <i
            className="cursor-pointer fas fa-times"
            onClick={() => deleteLikedVideo()}
          ></i>
        )}

        {pathname === "/history" && (
          <i
            className="cursor-pointer fas fa-times"
            onClick={() => deleteHistory()}
          ></i>
        )}

        <Link to={`/videoPlayer/${video._id}`}>
          <img
            className="img"
            src={`https://i.ytimg.com/vi/${video.thumbnail}.jpg`}
            alt="video-thumbnail"
          />
        </Link>
      </div>
    </section>
  );
};
