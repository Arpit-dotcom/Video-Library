import { Footer, Navbar } from "components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  VideoListing,
  Home,
  Playlist,
  WatchLater,
  LikedVideos,
  History,
  VideoPlayer,
} from "pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videoListing" element={<VideoListing />} />
        <Route path="/videoPlayer" element={<VideoPlayer />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
