export const isVideoInHistory = (videoId, history) => {
  return history.map((video) => video._id === videoId);
};
