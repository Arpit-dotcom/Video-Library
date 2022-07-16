import { Sidebar, VideoContainer } from "components";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

export const Main = () => {
  const { watchLater } = useSelector((state) => state.watchLater);
  return (
    <>
      <section className="main">
        <Sidebar />

        <main className="main-content">
          {watchLater?.length ? (
            <div className="margin-1 heading">
              <h1>Watch Later.</h1>
              <p>{watchLater?.length} videos</p>
            </div>
          ) : (
            <span className="empty-container">
              <h2>Watch later is empty !!!</h2>
              <p>
                There is no watch later video yet,{" "}
                <Link to="/explore">explore more</Link>
              </p>
            </span>
          )}

          {watchLater?.map((video, index) => {
            return <VideoContainer video={video} key={index} />;
          })}
        </main>
        <ToastContainer autoClose={2000} />
      </section>
    </>
  );
};
