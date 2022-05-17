import "styles/playlist-modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import { useAuth, usePlaylist } from "contexts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isNewPlaylist } from "utils";

export const PlaylistModal = () => {
  const navigate = useNavigate();
  const { token, isLoggedIn } = useAuth();
  const [input, setInput] = useState(false);
  const [newInput, setNewInput] = useState("");
  const { playlistDispatch, playlistState, setShowPlaylistModal } =
    usePlaylist();
  const newPlaylist = isNewPlaylist(newInput, playlistState.playlists);

  const addPlaylistHandler = () => {
    setInput((prev) => !prev);
  };

  const addBtnHandler = async () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      if (!newPlaylist) {
        try {
          const response = await axios.post(
            "/api/user/playlists",
            {
              playlist: { title: newInput },
            },
            {
              headers: { authorization: token },
            }
          );
          playlistDispatch({
            type: "ADD_NEW_PLAYLIST",
            payload: response.data.playlists,
          });
        } catch (e) {
          console.log(e);
        }
      } else {
        console.log("playlist already exists");
      }
    }
    setNewInput("");
    setInput(false);
  };

  return (
    <section className="playlist-modal">
      <div className="head">
        <span>Save to playlist</span>
        <AiOutlineClose
          className="cursor-pointer close"
          onClick={() => setShowPlaylistModal(false)}
        />
      </div>
      <div className="divider"></div>
      {playlistState.playlists.length !== 0 &&
        playlistState.playlists.map((playlist, index) => (
          <label className="label" key={index}>
            <input className="input" type="checkbox" name={playlist.title} />
            {playlist.title}
          </label>
        ))}
      {input && (
        <>
          <input
            className="add-inp"
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
          />
          <button className="add-btn" onClick={() => addBtnHandler()}>
            Add
          </button>
        </>
      )}
      <button className="btn" onClick={() => addPlaylistHandler()}>
        <BsPlusLg className="plus" />
        Create playlist
      </button>
    </section>
  );
};
