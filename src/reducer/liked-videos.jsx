import { addLikedVideo, deleteLikedVideo } from "utils";

export const likedVideoReducer = (likedVideoState, likedVideoAction) => {
  switch (likedVideoAction.type) {
    case "ADD_TO_LIKED_VIDEO":
      return {
        ...likedVideoState,
        likedVideo: addLikedVideo(
          likedVideoState.likedVideo,
          likedVideoAction.payload
        ),
      };
    case "DELETE_FROM_LIKED_VIDEO":
      return {
        ...likedVideoState,
        likedVideo: deleteLikedVideo(
          likedVideoState.likedVideo,
          likedVideoAction.payload
        ),
      };
    default:
      return likedVideoState;
  }
};
