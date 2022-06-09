import { Sidebar, VideoContainer } from "components";
import { useLikedVideo } from "contexts";
import { Link } from "react-router-dom";

export const Main = () => {
  const { likedVideoState } = useLikedVideo();
  return (
    <>
      <section className="main">
        <Sidebar />

        <main className="main-content">
          {likedVideoState.likedVideo.length ? (
            <div className="margin-1 heading">
              <h1>Liked Videos.</h1>
              <p>{likedVideoState.likedVideo.length} videos</p>
            </div>
          ) : (
            <span className="empty-liked">
              There is no liked videos yet,{" "}
              <Link to="/explore">explore more</Link>
            </span>
          )}

          {likedVideoState.likedVideo.map((video, index) => {
            return <VideoContainer video={video} key={index} />;
          })}
        </main>
      </section>
    </>
  );
};
