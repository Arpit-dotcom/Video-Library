import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "contexts";
import { isVideoInWatchLater } from "utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchLater, removeFromWatchLater } from "slice/watchLaterSlice";

export const VideoCard = ({
  filtervideo,
  setShowPlaylistModal,
  setPlaylistVideo,
}) => {
  const navigate = useNavigate();
  const { isLoggedIn, token } = useAuth();
  const [card, setCard] = useState(false);
  const dispatch = useDispatch();
  const { watchLater } = useSelector((state) => state.watchLater);
  const videoInWatchLater = isVideoInWatchLater(filtervideo._id, watchLater);

  const cardPopUp = () => {
    setCard((prev) => !prev);
  };

  const watchLaterHandler = async () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (!videoInWatchLater) {
        const video = filtervideo;
        dispatch(addToWatchLater({ video, token }));
        toast.success("Video added to watch later");
      } else {
        const videoId = filtervideo._id;
        dispatch(removeFromWatchLater({ videoId, token }));
        toast.error("Video removed from watch later");
      }
    }
  };

  const addPlaylist = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setShowPlaylistModal(true);
      setPlaylistVideo(filtervideo);
      setCard(false);
    }
  };

  return (
    <section className="card badge-card" key={filtervideo._id}>
      <div className="timing">{filtervideo.time}</div>
      <Link to={`/videoPlayer/${filtervideo._id}`} className="video-link">
        <img
          className="img"
          src={`https://i.ytimg.com/vi/${filtervideo.thumbnail}.jpg`}
          alt="card-thumbnail"
        />
      </Link>
      {card && (
        <div className="card-pop-up">
          <p className="cursor-pointer playlist" onClick={() => addPlaylist()}>
            <i className="fas fa-list"></i>Save to Playlist
          </p>
          <p
            className="cursor-pointer watch"
            onClick={() => watchLaterHandler()}
          >
            {videoInWatchLater ? (
              <i className="fas fa-check-circle"></i>
            ) : (
              <i className="far fa-clock"></i>
            )}
            Watch Later
          </p>
          <i
            className="cursor-pointer fas fa-times"
            onClick={() => cardPopUp()}
          ></i>
        </div>
      )}
      <div className="card-text">
        <section className="avatar flex">
          <span className="round-avatar">
            <img
              className="round sm"
              src={`https://yt3.ggpht.com/${filtervideo.avatar}=s176-c-k-c0x00ffffff-no-rj-mo`}
              alt="avatar-image"
            />
          </span>
          <span style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h4 className="title">{filtervideo.title}</h4>
                <small>{filtervideo.creator}</small>
              </div>
              <i
                className="cursor-pointer fas fa-ellipsis-v"
                onClick={() => cardPopUp()}
              ></i>
            </div>
            <div className="margin-top-0_5">
              <small className="card-view">
                <i className="fas fa-eye"></i>
                {filtervideo.views} views
              </small>
              <small>
                <i className="far fa-dot-circle"></i>
                {filtervideo.days}
              </small>
            </div>
          </span>
        </section>
      </div>
    </section>
  );
};
