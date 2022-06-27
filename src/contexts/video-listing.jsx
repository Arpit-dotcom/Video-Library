import axios from "axios";
import {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
import { getCategoryVideos, getFilteredVideos } from "utils";
import { videoReducer } from "reducer";

const VideoListingContext = createContext();

const VideoListingProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    category: "",
    search: "",
  });

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

  const categoryVideos = getCategoryVideos(videos, videoState.category);
  const filteredVideos = getFilteredVideos(categoryVideos, videoState.search);
  return (
    <VideoListingContext.Provider
      value={{ videoState, videoDispatch, filteredVideos }}
    >
      {children}
    </VideoListingContext.Provider>
  );
};

const useVideoListing = () => useContext(VideoListingContext);

export { VideoListingProvider, useVideoListing };
