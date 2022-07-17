export const isVideoInWatchLater = (videoId, watchLater) => {
  return watchLater.some((video) => video._id === videoId);
};
