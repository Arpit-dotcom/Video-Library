import { videos } from "backend/db/videos";
import ReactPlayer from "react-player";
import { Sidebar } from "components";
import { useParams, useNavigate } from "react-router-dom";
import {
  useWatchLater,
  useLikedVideo,
  useHistory,
  usePlaylist,
  useAuth,
} from "contexts";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Main = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { videoId } = useParams();
  const { watchLaterDispatch } = useWatchLater();
  const { likedVideoDispatch } = useLikedVideo();
  const { historyDispatch } = useHistory();
  const { playlistDispatch } = usePlaylist();

  const getFilterVideo = (videoId, videos) => {
    return videos.find((video) => video.id === videoId);
  };

  const filterVideo = getFilterVideo(videoId, videos);

  const addWatchLater = (videoId) => {
    !isLoggedIn
      ? navigate("/login")
      : (watchLaterDispatch({ type: "ADD_TO_WATCH_LATER", payload: videoId }),
        toast.success("Video add to watch later!"));
  };

  const addLikedVideos = (videoId) => {
    !isLoggedIn
      ? navigate("/login")
      : (likedVideoDispatch({ type: "ADD_TO_LIKED_VIDEO", payload: videoId }),
        toast.success("Video add to liked videos!"));
  };

  const addPlaylist = (videoId) => {
    !isLoggedIn
      ? navigate("/login")
      : (playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: videoId }),
        toast.success("Video add to playlist!"));
  };

  useEffect(() => {
    historyDispatch({ type: "ADD_TO_HISTORY", payload: filterVideo });
    toast.success("Video add to history!");
  }, [videoId]);

  return (
    <>
      <section className="videoPlayerContainer">
        <Sidebar />

        <main className="main-content">
          <div className="video">
            <ReactPlayer
              className="video-player"
              url={filterVideo.link}
              controls
            />
          </div>

          <h2 className="margin-top-1 title">{filterVideo.title}</h2>

          <div className="margin-top-2 footer">
            <span className="sub-container1">
              <img
                className="round sm"
                src={filterVideo.image}
                alt="video-avatar"
              />
              <span className="margin-top-0_5 left-sub-container">
                <p style={{ textAlign: "left" }}>{filterVideo.creator}</p>
                <div className="margin-top-0_5 left-mini-container">
                  <i className="margin-right-0_5 fas fa-eye"></i>
                  <span className="margin-right-2">{filterVideo.views}</span>
                  <i className="margin-right-0_5 far fa-dot-circle"></i>
                  <span>{filterVideo.days}</span>
                </div>
              </span>
            </span>
            <span className="margin-top-0_5 sub-container2">
              <span
                className="cursor-pointer margin-right-2"
                onClick={() => addLikedVideos(filterVideo)}
              >
                <i className="margin-right-0_5 margin-top-0_2 fas fa-thumbs-up"></i>
                Like
              </span>

              <span
                className="cursor-pointer margin-right-2"
                onClick={() => addPlaylist(filterVideo)}
              >
                <i className="margin-right-0_5 margin-top-0_2 fas fa-list"></i>
                Save to playlist
              </span>

              <span
                className="cursor-pointer"
                onClick={() => addWatchLater(filterVideo)}
              >
                <i className="margin-right-0_5 margin-top-0_2 far fa-clock"></i>
                Watch later
              </span>
            </span>
          </div>

          <div className="margin-top-2 description">
            {filterVideo.description}
          </div>
        </main>
      </section>
      <ToastContainer />
    </>
  );
};
