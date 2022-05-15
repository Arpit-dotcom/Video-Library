import { Sidebar, PlaylistContainer } from "components";
import { useWatchLater } from "contexts";

export const Main = () => {
  const { watchLaterState } = useWatchLater();
  return (
    <>
      <section className="main">
        <Sidebar />

        <main className="main-content">
          <div className="margin-1 heading">
            <h1>Watch Later.</h1>
            <p>{watchLaterState.watchLater.length} videos</p>
          </div>

          {watchLaterState.watchLater.map((video,index ) => {
            return <PlaylistContainer video={video} key={index}/>;
          })}
        </main>
      </section>
    </>
  );
};
