import { Navbar } from "components";
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
  Login,
  Logout,
  Signup,
} from "pages";
import Mockman from "mockman-js";
import { RequiredAuth } from "required-auth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videoListing" element={<VideoListing />}>
          <Route path=":category" element={<VideoListing />} />
        </Route>
        <Route path="/videoPlayer" element={<VideoPlayer />}>
          <Route path=":videoId" element={<VideoPlayer />} />
        </Route>
        <Route
          path="/playlist"
          element={
            <RequiredAuth>
              <Playlist />
            </RequiredAuth>
          }
        />
        <Route
          path="/watchLater"
          element={
            <RequiredAuth>
              <WatchLater />
            </RequiredAuth>
          }
        />
        <Route
          path="/likedVideos"
          element={
            <RequiredAuth>
              <LikedVideos />
            </RequiredAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiredAuth>
              <History />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
