import { Sidebar } from "components";
import { VideoCard } from "./video-card";
import { usePlaylist, useVideoListing } from "contexts";
import { PlaylistModal } from "components";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

export const Main = ({ categories }) => {
  const [playlistVideo, setPlaylistVideo] = useState(null);
  const { videoState, videoDispatch, filteredVideos } = useVideoListing();
  const { showPlaylistModal, setShowPlaylistModal } = usePlaylist();
  const active =
    videoState.category === "" || videoState.category === "All" ? "active" : "";

  return (
    <>
      <section className="videoContainer">
        <Sidebar />

        <main className="main-content">
          {showPlaylistModal && <PlaylistModal video={playlistVideo} />}
          <ul className="filter-list">
            <li
              className={`cursor-pointer filter-list-item ${active}`}
              onClick={() =>
                videoDispatch({ type: "FILTER_CATEGORY", payload: "All" })
              }
            >
              All
            </li>
            {categories.map(({ categoryName }, index) => (
              <li
                className={`cursor-pointer filter-list-item ${
                  videoState.category === categoryName ? "active" : ""
                }`}
                key={index}
                onClick={() =>
                  videoDispatch({
                    type: "FILTER_CATEGORY",
                    payload: categoryName,
                  })
                }
              >
                {categoryName}
              </li>
            ))}
          </ul>
          <div className="video-content">
            {filteredVideos && (
              <>
                {filteredVideos.map((filtervideo, index) => (
                  <VideoCard
                    filtervideo={filtervideo}
                    key={index}
                    setShowPlaylistModal={setShowPlaylistModal}
                    setPlaylistVideo={setPlaylistVideo}
                  />
                ))}
              </>
            )}
            {!filteredVideos.length && (
              <h1 className="product-empty">Loading...</h1>
            )}
          </div>
        </main>
        <ToastContainer />
      </section>
    </>
  );
};
