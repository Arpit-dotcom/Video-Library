export const likedVideoReducer = (likedVideoState, likedVideoAction) => {
  switch (likedVideoAction.type) {
    case "ADD_TO_LIKED_VIDEO":
      return {
        ...likedVideoState,
        likedVideo: likedVideoAction.payload
      };
    case "DELETE_FROM_LIKED_VIDEO":
      return {
        ...likedVideoState,
        likedVideo: likedVideoAction.payload
      };
    default:
      return likedVideoState;
  }
};
