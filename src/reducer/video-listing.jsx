export const videoReducer = (videoState, videoAction) => {
  switch (videoAction.type) {
    case "category":
      return { ...videoState, category: videoAction.payload };
    default:
      return videoState;
  }
};
