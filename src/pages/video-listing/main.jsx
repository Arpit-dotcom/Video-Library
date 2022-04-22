import { videos } from "backend/db/videos";
import { Sidebar } from "components";
import { VideoCard } from "./video-card";
import { home } from "staticData/data";
import { useVideoListing } from "contexts";

export const Main = () => {
  const { videoDispatch, filteredVideos } = useVideoListing();
  return (
    <>
      <section className="videoContainer">
        <Sidebar />

        <main className="main-content">
          <ul className="filter-list">
            <li
              className="filter-list-item"
              style={{ cursor: "pointer" }}
              onClick={() =>
                videoDispatch({ type: "category", payload: "all" })
              }
            >
              All
            </li>
            {home.data.map(({ title }) => (
              <li
                style={{ cursor: "pointer" }}
                className="filter-list-item"
                onClick={() =>
                  videoDispatch({ type: "category", payload: title })
                }
              >
                {title}
              </li>
            ))}
          </ul>
          {filteredVideos && (
            <>
              {filteredVideos.map((item, index) => (
                <VideoCard {...item} key={index} />
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
