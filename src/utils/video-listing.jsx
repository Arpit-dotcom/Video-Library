export const getFilteredVideos = ([...videos], category) => {
  return category === "" || category === "All"
    ? videos
    : videos.filter((video) => video.creator === category);
};
