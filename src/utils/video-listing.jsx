export const getCategoryVideos = ([...videos], category) => {
  return category === "" || category === "All"
    ? videos
    : videos.filter((video) => video.creator === category);
};

export const getFilteredVideos = ([...videos], search) => {
  return videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );
};
