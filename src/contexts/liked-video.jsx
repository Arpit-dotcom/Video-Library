import { useState, createContext, useContext, useReducer } from "react";
import { likedVideoReducer } from "reducer";

const LikedVideoContext = createContext();

const LikedVideoProvider = ({ children }) => {

  const [likedVideoState, likedVideoDispatch] = useReducer(likedVideoReducer, {
    likedVideo: [],
  });

  return (
    <LikedVideoContext.Provider
      value={{ likedVideoDispatch, likedVideoState }}
    >
      {children}
    </LikedVideoContext.Provider>
  );
};

const useLikedVideo = () => useContext(LikedVideoContext);

export { LikedVideoProvider, useLikedVideo };
