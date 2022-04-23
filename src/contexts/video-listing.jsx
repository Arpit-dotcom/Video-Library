import axios from "axios";
import {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
import { getFilteredVideos } from "utils";
import { videoReducer } from "reducer";

const VideoListingContext = createContext();

const VideoListingProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [videoState, videoDispatch] = useReducer(videoReducer, { category: "" });

  useEffect(() => {
    (async () => {
      try {
        const apiData = await axios.get("/api/videos");
        setVideos(apiData.data.videos);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  const filteredVideos = getFilteredVideos(videos, videoState.category);
  return (
    <VideoListingContext.Provider value={{ videoDispatch, filteredVideos }}>
      {children}
    </VideoListingContext.Provider>
  );
};

const useVideoListing = () => useContext(VideoListingContext);

export { VideoListingProvider, useVideoListing };
