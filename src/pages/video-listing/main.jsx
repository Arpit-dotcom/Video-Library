import { videos } from "backend/db/videos";
import { Sidebar } from "components";
import { VideoCard } from "./video-card";
import { home } from "staticData/data";

export const Main = () => {
  return (
    <>
      <section className="videoContainer">
        <Sidebar />

        <main className="main-content">
          <ul className="filter-list">
            <li className="filter-list-item">All</li>
            {home.data.map((list) => (
              <li className="filter-list-item">{list.title}</li>
            ))}
          </ul>
          {videos && (
            <>
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
