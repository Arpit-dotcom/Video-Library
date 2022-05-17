import { Sidebar } from "components";
import { VideoCard } from "./video-card";
import { Link } from "react-router-dom";
import { usePlaylist, useVideoListing } from "contexts";
import { PlaylistModal } from "components";

export const Main = ({ categories }) => {
  const { videoDispatch, filteredVideos } = useVideoListing();
  const { showPlaylistModal, setShowPlaylistModal } = usePlaylist();

  return (
    <>
      <section className="videoContainer">
        <Sidebar />

        <main className="main-content">
          {showPlaylistModal && <PlaylistModal />}
          <ul className="filter-list">
            <Link
              to="/videoListing"
              className="cursor-pointer filter-list-item"
              onClick={() =>
                videoDispatch({ type: "category", payload: "all" })
              }
            >
              All
            </Link>
            {categories.map(({ title }, index) => (
              <Link
                to={`/videoListing/${title}`}
                className="cursor-pointer filter-list-item"
                key={index}
                onClick={() =>
                  videoDispatch({ type: "category", payload: title })
                }
              >
                {title}
              </Link>
            ))}
          </ul>
          {filteredVideos && (
            <>
              {filteredVideos.map((filtervideo, index) => (
                <VideoCard
                  filtervideo={filtervideo}
                  key={index}
                  setShowPlaylistModal={setShowPlaylistModal}
                />
              ))}
            </>
          )}
          {!filteredVideos.length && (
            <h1 className="product-empty">Loading...</h1>
          )}
        </main>
      </section>
    </>
  );
};
