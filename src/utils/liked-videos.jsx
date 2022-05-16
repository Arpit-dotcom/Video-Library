export const isVideoLiked = (videoId, likedVideo) => {
  return likedVideo.find((video) => video._id === videoId);
};
