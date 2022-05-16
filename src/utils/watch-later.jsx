export const isVideoInWatchLater = (videoId, watchLater) => {
  return watchLater.find((video) => video._id === videoId);
};
