export const getFilteredVideos = ([...videos], state) => {
  return state === "" || state === "all"
    ? videos
    : videos.filter((video) => video.creator === state);
};
