import { addPlaylist, deletePlaylist } from "utils";

export const playlistReducer = (playlistState, playlistAction) => {
  switch (playlistAction.type) {
    case "ADD_TO_PLAYLIST":
      return {
        ...playlistState,
        playlist: addPlaylist(playlistState.playlist, playlistAction.payload),
      };
    case "DELETE_FROM_PLAYLIST":
      return {
        ...playlistState,
        playlist: deletePlaylist(
          playlistState.playlist,
          playlistAction.payload
        ),
      };
    default:
      return playlistState;
  }
};
