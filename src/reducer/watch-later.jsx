import { addWatchLaterVideos, deleteWatchLaterVideos } from "utils";

export const watchLaterReducer = (watchLaterState, watchLaterAction) => {
  switch (watchLaterAction.type) {
    case "Add to watch-later":
      return {
        ...watchLaterState,
        watchLater: addWatchLaterVideos(
          watchLaterState.watchLater,
          watchLaterAction.payload
        ),
      };
    case "Delete from watch-later":
      return {
        ...watchLaterState,
        watchLater: deleteWatchLaterVideos(
          watchLaterState.watchLater,
          watchLaterAction.payload
        ),
      };
    default:
      return watchLaterState;
  }
};
