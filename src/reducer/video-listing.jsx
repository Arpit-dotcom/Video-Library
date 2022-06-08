export const videoReducer = (videoState, videoAction) => {
  switch (videoAction.type) {
    case "FILTER_CATEGORY":
      return { ...videoState, category: videoAction.payload };
    default:
      return videoState;
  }
};
