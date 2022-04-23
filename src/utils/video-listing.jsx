export const getFilteredVideos = ([...videos], category) => {
  return category === "" || category === "all"
    ? videos
    : videos.filter((video) => video.creator === category);
};
