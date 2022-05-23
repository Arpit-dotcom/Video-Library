export const playlistReducer = (playlistState, playlistAction) => {
  switch (playlistAction.type) {
    case "ADD_NEW_PLAYLIST":
      return {
        ...playlistState,
        playlists: playlistAction.payload,
      };
    case "DELETE_PLAYLIST":
      return {...playlistState, playlists: playlistAction.payload};
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...playlistState,
        playlists: playlistState.playlists.map((playlist) =>
          playlist._id === playlistAction.payload.playlistId
            ? {
                ...playlist,
                videos: playlist.videos.concat(playlistAction.payload.video),
              }
            : playlist
        ),
      };
    case "DELETE_VIDEO_TO_PLAYLIST":
      return {
        ...playlistState,
        playlists: playlistState.playlists.map((playlist) =>
          playlist._id === playlistAction.payload.playlistId
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) => video._id !== playlistAction.payload.videoId
                ),
              }
            : playlist
        ),
      };
    default:
      return playlistState;
  }
};
