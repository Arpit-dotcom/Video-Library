import { useAuth, usePlaylist } from "contexts";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPlaylist } from "utils";
import { Sidebar } from "./sidebar";
import "styles/header.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PlaylistContainer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { token } = useAuth();
  const { playlistState, playlistDispatch } = usePlaylist();
  const playlistId = params.playlistId;
  const playlist = getPlaylist(playlistId, playlistState.playlists);

  const deletePlaylist = async () => {
    try {
      const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: token },
      });
      playlistDispatch({
        type: "DELETE_PLAYLIST",
        payload: response.data.playlists,
      });
      navigate("/playlist");
      toast.error("Playlist is deleted");
    } catch (e) {
      console.log(e);
    }
  };

  const deletePlaylistVideo = async (videoId) => {
    try {
      await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
        headers: { authorization: token },
      });
      playlistDispatch({
        type: "DELETE_VIDEO_TO_PLAYLIST",
        payload: { videoId, playlistId },
      });
      toast.error("Video removed from playlist");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className="main">
        <Sidebar />

        <main className="main-content">
          <div className="top-header">
            <span className="heading">
              <h1>{playlist?.title}.</h1>
              <p>{playlist?.videos.length} videos</p>
            </span>
            <span>
              <i
                className="cursor-pointer fas fa-trash"
                onClick={() => deletePlaylist()}
              ></i>
            </span>
          </div>

          {playlist?.videos.map((video) => {
            return (
              <section className="card horizontal" key={video._id}>
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
                        <span>{video.views} views</span>
                      </span>
                      <span className="time">
                        <i className="fas fa-clock"></i>
                        <span>{video.time}</span>
                      </span>
                    </div>
                  </section>

                  <i
                    className="cursor-pointer fas fa-times"
                    onClick={() => deletePlaylistVideo(video._id)}
                  ></i>

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
          })}
        </main>
        <ToastContainer />
      </section>
    </>
  );
};
