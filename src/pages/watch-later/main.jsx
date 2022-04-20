import { videos } from "backend/db/videos";
import { Sidebar, PlaylistContainer } from "components";
import "styles/watch-later.css";

export const Main = () => {
  return (
    <>
      <section className="watchLaterContainer">
        <Sidebar />

        <main className="main-content">
          <div className="heading">
            <h2>Watch Later.</h2>
            <p>{videos.length} videos</p>
          </div>

          {videos.map((video) => {
            return <PlaylistContainer {...video} />;
          })}
        </main>
      </section>
    </>
  );
};
