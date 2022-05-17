export const playlistReducer = (playlistState, playlistAction) => {
  switch (playlistAction.type) {
    case "ADD_NEW_PLAYLIST":
      return {
        ...playlistState,
        playlists: playlistAction.payload,
      };
    default:
      return playlistState;
  }
};
