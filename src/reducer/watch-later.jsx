import { addWatchLaterVideos, deleteWatchLaterVideos } from "utils";

export const watchLaterReducer = (watchLaterState, watchLaterAction) => {
  switch (watchLaterAction.type) {
    case "ADD_TO_WATCH_LATER":
      return {
        ...watchLaterState,
        watchLater: watchLaterAction.payload,
      };
    case "DELETE_FROM_WATCH_LATER":
      return {
        ...watchLaterState,
        watchLater: watchLaterAction.payload,
      };
    default:
      return watchLaterState;
  }
};
