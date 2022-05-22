export const isNewPlaylist = (newInput, playlists) => {
  return playlists.find((playlist) => playlist.title === newInput);
};

export const isNewPlaylistVideo = (id, playlistVideos) => {
  return playlistVideos.some(video => video._id === id)
};
