import { useState,createContext, useContext, useReducer } from "react";
import { watchLaterReducer } from "reducer";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [addWatchLater, setAddWatchLater] = useState(false);

  const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
    watchLater: [],
  });

  return (
    <WatchLaterContext.Provider
      value={{
        watchLaterDispatch,
        watchLaterState,
        addWatchLater,
        setAddWatchLater,
      }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
