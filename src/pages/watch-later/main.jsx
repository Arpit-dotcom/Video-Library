import { Sidebar, VideoContainer } from "components";
import { useWatchLater } from "contexts";
import { Link } from "react-router-dom";

export const Main = () => {
  const { watchLaterState } = useWatchLater();
  return (
    <>
      <section className="main">
        <Sidebar />

        <main className="main-content">
          {watchLaterState.watchLater.length ? (
            <div className="margin-1 heading">
              <h1>Watch Later.</h1>
              <p>{watchLaterState.watchLater.length} videos</p>
            </div>
          ) : (
            <span className="empty-liked">
              There is no watch-later videos yet,{" "}
              <Link to="/explore">explore more</Link>
            </span>
          )}

          {watchLaterState.watchLater.map((video, index) => {
            return <VideoContainer video={video} key={index} />;
          })}
        </main>
      </section>
    </>
  );
};
