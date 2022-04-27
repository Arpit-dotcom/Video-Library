import { Link } from "react-router-dom";
import { useState } from "react";
import { usePlaylist, useWatchLater } from "contexts";

export const VideoCard = ({ filtervideo }) => {
  const [show, setShow] = useState(false);
  const { watchLaterDispatch } = useWatchLater();
  const { playlistDispatch } = usePlaylist();

  const cardPopUp = () => {
    setShow((prev) => !prev);
  };

  const addWatchLater = (video) => {
    watchLaterDispatch({ type: "ADD_TO_WATCH_LATER", payload: video });
    setShow(false);
  };

  const addPlaylist = (video) => {
    playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: video });
    setShow(false);
  };

  return (
    <section className="card badge-card" key={filtervideo.id}>
      <button className="timing">{filtervideo.time}</button>
      <Link to={`/videoPlayer/${filtervideo.id}`} className="video-link">
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
            onClick={() => addWatchLater(filtervideo)}
          >
            <i className="far fa-clock"></i>Watch Later
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
