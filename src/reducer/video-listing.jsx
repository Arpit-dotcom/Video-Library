export const videoReducer = (videoState, videoAction) => {
  switch (videoAction.type) {
    case "FILTER_CATEGORY":
      return { ...videoState, category: videoAction.payload };
    case "SET_SEARCH_CATEGORY":
      return { ...videoState, search: videoAction.payload };
    default:
      return videoState;
  }
};
