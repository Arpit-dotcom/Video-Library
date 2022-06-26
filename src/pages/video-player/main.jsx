import ReactPlayer from "react-player";
import { PlaylistModal, Sidebar } from "components";
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
import { isVideoInHistory, isVideoInWatchLater, isVideoLiked } from "utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Main = () => {
  const [video, setVideo] = useState(null);
  const navigate = useNavigate();
  const { isLoggedIn, token } = useAuth();
  const { videoId } = useParams();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { likedVideoState, likedVideoDispatch } = useLikedVideo();
  const { historyState, historyDispatch } = useHistory();
  const videoLiked = isVideoLiked(videoId, likedVideoState.likedVideo);
  const videoInWatchLater = isVideoInWatchLater(
    videoId,
    watchLaterState.watchLater
  );
  const videoInHistory = isVideoInHistory(videoId, historyState.history);
  const { showPlaylistModal, setShowPlaylistModal } = usePlaylist();

  useEffect(() => {
    (async () => {
      try {
        console.log(videoId);
        const response = await axios.get(`/api/video/${videoId}`);
        const video = response.data.video;
        setVideo(video);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [videoId]);

  useEffect(() => {
    if (video && videoInHistory) {
      (async () => {
        try {
          const response = await axios.post(
            "/api/user/history",
            { video },
            {
              headers: { authorization: token },
            }
          );
          historyDispatch({
            type: "ADD_TO_HISTORY",
            payload: response.data.history,
          });
          toast.success("Video added to history");
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, [video]);

  const watchLaterHandler = async () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (!videoInWatchLater) {
        try {
          const response = await axios.post(
            "/api/user/watchlater",
            { video },
            {
              headers: { authorization: token },
            }
          );
          watchLaterDispatch({
            type: "ADD_TO_WATCH_LATER",
            payload: response.data.watchlater,
          });
          toast.success("Video added to watch later");
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const response = await axios.delete(
            `/api/user/watchlater/${videoId}`,
            {
              headers: { authorization: token },
            }
          );
          watchLaterDispatch({
            type: "DELETE_FROM_WATCH_LATER",
            payload: response.data.watchlater,
          });
          toast.error("Video removed from watch later");
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const likeHandler = async () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (!videoLiked) {
        try {
          const response = await axios.post(
            "/api/user/likes",
            { video },
            {
              headers: { authorization: token },
            }
          );
          likedVideoDispatch({
            type: "ADD_TO_LIKED_VIDEO",
            payload: response.data.likes,
          });
          toast.success("Video added to liked video");
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const response = await axios.delete(`/api/user/likes/${videoId}`, {
            headers: { authorization: token },
          });
          likedVideoDispatch({
            type: "DELETE_FROM_LIKED_VIDEO",
            payload: response.data.likes,
          });
          toast.error("Video removed from liked video");
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const playlistHandler = (videoId) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setShowPlaylistModal(true);
    }
  };

  return (
    <>
      <section className="videoPlayerContainer">
        <Sidebar />

        {video && (
          <main className="main-content">
            {showPlaylistModal && <PlaylistModal video={video} />}
            <div className="video">
              <ReactPlayer
                className="video-player"
                url={`https://www.youtube.com/watch?v=${video.link}`}
                controls
              />
            </div>

            <h2 className="margin-top-1 title">{video.title}</h2>

            <div className="margin-top-2 footer">
              <span className="sub-container1">
                <img
                  className="round sm"
                  src={`https://yt3.ggpht.com/${video.avatar}=s176-c-k-c0x00ffffff-no-rj-mo`}
                  alt="avatar-image"
                />
                <span className="margin-top-0_5 left-sub-container">
                  <p style={{ textAlign: "left" }}>{video.creator}</p>
                  <div className="margin-top-0_5 left-mini-container">
                    <i className="margin-right-0_5 fas fa-eye"></i>
                    <span className="margin-right-2">{video.views} views</span>
                    <i className="fas fa-clock"></i>
                    <span>{video.time}</span>
                  </div>
                </span>
              </span>
              <span className="margin-top-0_5 sub-container2">
                <span
                  className="cursor-pointer margin-right-2"
                  onClick={() => likeHandler()}
                >
                  {videoLiked ? (
                    <i className="margin-right-0_5 margin-top-0 _2 fas fa-thumbs-up"></i>
                  ) : (
                    <i className="margin-right-0_5 margin-top-0_2 far fa-thumbs-up"></i>
                  )}
                  Like
                </span>

                <span
                  className="cursor-pointer margin-right-2"
                  onClick={() => playlistHandler()}
                >
                  <i className="margin-right-0_5 margin-top-0_2 fas fa-list"></i>
                  Save to playlist
                </span>

                <span
                  className="cursor-pointer"
                  onClick={() => watchLaterHandler()}
                >
                  {videoInWatchLater ? (
                    <i className="margin-right-0_5 margin-top-0_2 fas fa-check-circle"></i>
                  ) : (
                    <i className="margin-right-0_5 margin-top-0_2 far fa-clock"></i>
                  )}
                  Watch later
                </span>
              </span>
            </div>

            <div className="margin-top-2 description">{video.description}</div>
          </main>
        )}
        <ToastContainer />
      </section>
    </>
  );
};
