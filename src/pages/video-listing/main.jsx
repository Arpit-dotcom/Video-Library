import { videos } from "backend/db/videos";
import { Sidebar } from "components";
import { VideoCard } from "./video-card";
import { home } from "staticData/data";
import { Link } from "react-router-dom";
import { useVideoListing } from "contexts";

export const Main = () => {
  const { videoDispatch, filteredVideos } = useVideoListing();
  return (
    <>
      <section className="videoContainer">
        <Sidebar />

        <main className="main-content">
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
            {home.data.map(({ title }) => (
              <Link
                to={`/videoListing/${title}`}
                className="cursor-pointer filter-list-item"
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
                <VideoCard filtervideo={filtervideo} key={index} />
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
