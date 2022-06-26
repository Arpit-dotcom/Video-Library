import { Sidebar, VideoContainer } from "components";
import { useLikedVideo } from "contexts";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
            <span className="empty-container">
              <h2>Liked video is empty !!!</h2>
              <p>
                There is no liked video yet,{" "}
                <Link to="/explore">explore more</Link>
              </p>
            </span>
          )}

          {likedVideoState.likedVideo.map((video, index) => {
            return <VideoContainer video={video} key={index} />;
          })}
        </main>
        <ToastContainer />
      </section>
    </>
  );
};
