import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth, usePlaylist, useWatchLater } from "contexts";
import axios from "axios";

export const VideoCard = ({ filtervideo }) => {
  const navigate = useNavigate();
  const { isLoggedIn, token } = useAuth();
  const [show, setShow] = useState(false);
  const {
    watchLaterState,
    watchLaterDispatch,
    addWatchLater,
    setAddWatchLater,
  } = useWatchLater();
  const { playlistDispatch } = usePlaylist();

  const cardPopUp = () => {
    setShow((prev) => !prev);
  };

  const watchLaterHandler = async () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (!addWatchLater) {
        try {
          const response = await axios.post(
            "/api/user/watchlater",
            { video: filtervideo },
            {
              headers: { authorization: token },
            }
          );
          watchLaterDispatch({
            type: "ADD_TO_WATCH_LATER",
            payload: response.data.watchlater,
          });
          setAddWatchLater(true);
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const response = await axios.delete(
            `/api/user/watchlater/${filtervideo._id}`,
            {
              headers: { authorization: token },
            }
          );
          watchLaterDispatch({
            type: "DELETE_FROM_WATCH_LATER",
            payload: response.data.watchlater,
          });
          setAddWatchLater(false);
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const addPlaylist = (video) => {
    playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: video });
    setShow(false);
  };

  return (
    <section className="card badge-card" key={filtervideo._id}>
      <button className="timing">{filtervideo.time}</button>
      <Link to={`/videoPlayer/${filtervideo._id}`} className="video-link">
        <img
          className="img"
          src="https://media.istockphoto.com/photos/play-icon-youtube-picture-id1344290509?b=1&k=20&m=1344290509&s=170667a&w=0&h=nsr6-eek2_1H4OqmX5tdJE9LFVn20puWnO4xXx9j18g="
          alt="card-poster"
        />
      </Link>
      <i
        className="cursor-pointer fas fa-ellipsis-v"
        onClick={() => cardPopUp()}
      ></i>
      {show && (
        <div className="card-pop-up">
          <p
            className="cursor-pointer playlist"
            onClick={() => addPlaylist(filtervideo)}
          >
            <i className="fas fa-list"></i>Save to Playlist
          </p>
          <p
            className="cursor-pointer watch"
            onClick={() => watchLaterHandler()}
          >
            {watchLaterState.watchLater.find(
              (video) => video._id === filtervideo._id
            ) ? (
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
              src={filtervideo.image}
              alt="avatar-image"
            />
          </span>
          <span>
            <h4 className="title">{filtervideo.title}</h4>
            <small>{filtervideo.creator}</small>
            <div>
              <small className="card-view">
                <i className="fas fa-eye"></i>
                {filtervideo.views}
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
