const addLikedVideo = (likedVideos, payload) => {
  return likedVideos.find((video) => video.id === payload.id)
    ? likedVideos
    : [...likedVideos, payload];
};

const deleteLikedVideo = (likedVideos, payload) => {
  return likedVideos.filter((video) => video.id !== payload.id);
};

export { addLikedVideo, deleteLikedVideo };
