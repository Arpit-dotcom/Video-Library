import { PlaylistContainer, Sidebar } from "components";
import { usePlaylist } from "contexts";
import "styles/header.css";

export const Main = () => {
  const { playlistState } = usePlaylist();
  return (
    <>
      <section className="main">
        <Sidebar />

        <main className="main-content">
          <h1 className="heading">All Playlist</h1>
          <ul className="normal-list">
            {playlistState.playlist.map((video) => {
              return <PlaylistContainer video={video} />;
            })}
          </ul>
        </main>
      </section>
    </>
  );
};
