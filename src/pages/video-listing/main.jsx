import { videos } from "backend/db/videos";
import { Sidebar } from "components";
import { VideoCard } from "./video-card";

export const Main = () => {
  return (
    <>
      <section className="videoContainer">
        <Sidebar />

        <main className="main-content">
          {videos && (
            <>
              <ul className="filter-list">
                <li className="filter-list-item">List Item 1</li>
                <li className="filter-list-item">List Item 2</li>
                <li className="filter-list-item">List Item 3</li>
                <li className="filter-list-item">List Item 4</li>
              </ul>
              {videos.map((item, index) => (
                <VideoCard {...item} key={index} />
              ))}
            </>
          )}
          {!videos.length && <h1 className="product-empty">Loading...</h1>}
        </main>
      </section>
    </>
  );
};
