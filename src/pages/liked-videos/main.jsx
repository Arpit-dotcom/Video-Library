import { Sidebar, PlaylistContainer } from "components";
import { useLikedVideo } from "contexts";

export const Main = () => {
  const {likedVideoState} = useLikedVideo()
  return (
    <>
      <section className="watchLaterContainer">
        <Sidebar />

        <main className="main-content">
          <div className="margin-1 heading">
            <h2>Liked Videos.</h2>
            <p>{likedVideoState.likedVideo.length} videos</p>
          </div>

          {likedVideoState.likedVideo.map((video) => {
            return <PlaylistContainer video = {video} />;
          })}
        </main>
      </section>
    </>
  );
};
