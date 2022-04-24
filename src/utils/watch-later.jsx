const addWatchLaterVideos = (watchLaterVideos, payload) => {
  return watchLaterVideos.find((video) => video.id === payload.id)
    ? watchLaterVideos
    : [...watchLaterVideos, payload];
};

const deleteWatchLaterVideos = (watchLaterVideos, payload) => {
  return watchLaterVideos.filter((video) => video.id !== payload.id);
};

export { addWatchLaterVideos, deleteWatchLaterVideos };
