import axios from "axios";
import { useAuth, useHistory, useWatchLater } from "contexts";
import { Link, useLocation } from "react-router-dom";
import "styles/playlist-container.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { removeFromLiked } from "slice/likeSlice";

export const VideoContainer = ({ video }) => {
  const { pathname } = useLocation();
  const { historyDispatch } = useHistory();
  const { watchLaterDispatch, setAddWatchLater } = useWatchLater();
  const dispatch = useDispatch();
  const { token } = useAuth();

  const deleteWatchLater = async () => {
    try {
      const response = await axios.delete(`/api/user/watchlater/${video._id}`, {
        headers: { authorization: token },
      });
      watchLaterDispatch({
        type: "DELETE_FROM_WATCH_LATER",
        payload: response.data.watchlater,
      });
      toast.error("Video removed from watch later");
      setAddWatchLater(false);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteLikedVideo = async () => {
    const videoId = video._id;
    dispatch(removeFromLiked({ videoId, token }));
    toast.error("Video removed from liked videos");
  };

  const deleteHistory = async () => {
    try {
      const response = await axios.delete(`/api/user/history/${video._id}`, {
        headers: { authorization: token },
      });
      historyDispatch({
        type: "DELETE_FROM_HISTORY",
        payload: response.data.history,
      });
      toast.error("Video removed from history");
    } catch (e) {
      console.log(e);
    }
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
