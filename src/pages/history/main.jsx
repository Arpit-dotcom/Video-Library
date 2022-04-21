import { videos } from "backend/db/videos";
import { PlaylistContainer, Sidebar } from "components";
import "styles/watch-later.css";

export const Main = () => {
  return (
    <>
      <section className="watchLaterContainer">
        <Sidebar />

        <main className="main-content">
          <div className="top-header">
            <span className="heading">
              <h2>History.</h2>
              <p>{videos.length} videos</p>
            </span>
            <span>
              <i className="fas fa-trash"></i>
            </span>
          </div>

          {videos.map((video) => {
            return <PlaylistContainer {...video} />;
          })}
        </main>
      </section>
    </>
  );
};
