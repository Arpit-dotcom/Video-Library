export const isVideoLiked = (videoId, likedVideo) => {
  return likedVideo.some((video) => video._id === videoId);
};
