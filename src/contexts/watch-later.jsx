import { createContext, useContext, useReducer } from "react";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const addWatchLaterVideos = (watchLaterVideos, payload) => {
    return watchLaterVideos.find((video) => video.id === payload.id)
      ? watchLaterVideos
      : [...watchLaterVideos, payload];
  };

  const deleteWatchLaterVideos = (watchLaterVideos, payload) => {
    return watchLaterVideos.filter((video) => video.id !== payload.id)
  };

  const watchLaterReducer = (watchLaterState, watchLaterAction) => {
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

  const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
    watchLater: [],
  });

  console.log(watchLaterState.watchLater);
  return (
    <WatchLaterContext.Provider value={{ watchLaterDispatch, watchLaterState }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
