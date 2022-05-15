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
import { useEffect, useState } from "react";
import axios from "axios";

export const Main = () => {
  const [video, setVideo] = useState({});
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { videoId } = useParams();
  const { watchLaterDispatch } = useWatchLater();
  const { likedVideoDispatch } = useLikedVideo();
  const { historyDispatch } = useHistory();
  const { playlistDispatch } = usePlaylist();

  const addWatchLater = (videoId) => {
    !isLoggedIn
      ? navigate("/login")
      : watchLaterDispatch({ type: "ADD_TO_WATCH_LATER", payload: videoId });
  };

  const addLikedVideos = (videoId) => {
    !isLoggedIn
      ? navigate("/login")
      : likedVideoDispatch({ type: "ADD_TO_LIKED_VIDEO", payload: videoId });
  };

  const addPlaylist = (videoId) => {
    !isLoggedIn
      ? navigate("/login")
      : playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: videoId });
  };

  useEffect(() => {
    historyDispatch({ type: "ADD_TO_HISTORY", payload: video });
    (async () => {
      try {
        const response = await axios.get(`/api/video/${videoId}`);
        setVideo(response.data.video);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [videoId]);

  return (
    <>
      <section className="videoPlayerContainer">
        <Sidebar />

        <main className="main-content">
          <div className="video">
            <ReactPlayer
              className="video-player"
              url={video.link}
              controls
            />
          </div>

          <h2 className="margin-top-1 title">{video.title}</h2>

          <div className="margin-top-2 footer">
            <span className="sub-container1">
              <img
                className="round sm"
                src={video.image}
                alt="video-avatar"
              />
              <span className="margin-top-0_5 left-sub-container">
                <p style={{ textAlign: "left" }}>{video.creator}</p>
                <div className="margin-top-0_5 left-mini-container">
                  <i className="margin-right-0_5 fas fa-eye"></i>
                  <span className="margin-right-2">{video.views}</span>
                  <i className="margin-right-0_5 far fa-dot-circle"></i>
                  <span>{video.days}</span>
                </div>
              </span>
            </span>
            <span className="margin-top-0_5 sub-container2">
              <span
                className="cursor-pointer margin-right-2"
                onClick={() => addLikedVideos(video)}
              >
                <i className="margin-right-0_5 margin-top-0_2 fas fa-thumbs-up"></i>
                Like
              </span>

              <span
                className="cursor-pointer margin-right-2"
                onClick={() => addPlaylist(video)}
              >
                <i className="margin-right-0_5 margin-top-0_2 fas fa-list"></i>
                Save to playlist
              </span>

              <span
                className="cursor-pointer"
                onClick={() => addWatchLater(video)}
              >
                <i className="margin-right-0_5 margin-top-0_2 far fa-clock"></i>
                Watch later
              </span>
            </span>
          </div>

          <div className="margin-top-2 description">
            {video.description}
          </div>
        </main>
      </section>
    </>
  );
};
