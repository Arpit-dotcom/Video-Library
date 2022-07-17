import { Sidebar, VideoContainer } from "components";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

export const Main = () => {
  const { likes } = useSelector((state) => state.likes);

  return (
    <>
      <section className="main">
        <Sidebar />

        <main className="main-content">
          {likes?.length ? (
            <div className="margin-1 heading">
              <h1>Liked Videos.</h1>
              <p>{likes?.length} videos</p>
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

          {likes?.map((video, index) => {
            return <VideoContainer video={video} key={index} />;
          })}
        </main>
        <ToastContainer autoClose={2000} />
      </section>
    </>
  );
};
