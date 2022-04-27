import { createContext, useContext, useReducer } from "react";
import { playlistReducer } from "reducer";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {

  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlist: [],
  });

  return (
    <PlaylistContext.Provider value={{ playlistDispatch, playlistState }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
