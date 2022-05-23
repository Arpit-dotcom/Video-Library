import { Sidebar, VideoContainer } from "components";
import { useLikedVideo } from "contexts";

export const Main = () => {
  const { likedVideoState } = useLikedVideo();
  return (
    <>
      <section className="main">
        <Sidebar />

        <main className="main-content">
          <div className="margin-1 heading">
            <h1>Liked Videos.</h1>
            <p>{likedVideoState.likedVideo.length} videos</p>
          </div>

          {likedVideoState.likedVideo.map((video, index) => {
            return <VideoContainer video={video} key={index} />;
          })}
        </main>
      </section>
    </>
  );
};
