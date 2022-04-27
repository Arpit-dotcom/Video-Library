const addPlaylist = (playlist, payload) => {
  return playlist.find((video) => video.id === payload.id)
    ? playlist
    : [...playlist, payload];
};

const deletePlaylist = (playlist, payload) => {
  return playlist.filter((video) => video.id !== payload.id);
};

export { addPlaylist, deletePlaylist };
