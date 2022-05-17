import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { playlistReducer } from "reducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlists: [],
  });

  return (
    <PlaylistContext.Provider
      value={{
        playlistDispatch,
        playlistState,
        showPlaylistModal,
        setShowPlaylistModal,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
