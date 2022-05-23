const isNewPlaylist = (newInput, playlists) => {
  return playlists.find((playlist) => playlist.title === newInput);
};

const isNewPlaylistVideo = (id, playlistVideos) => {
  return playlistVideos.some((video) => video._id === id);
};

const getPlaylist = (playlistId, playlists) => {
  return playlists.find((playlist) => playlist._id === playlistId);
};

export { isNewPlaylist, isNewPlaylistVideo, getPlaylist };
