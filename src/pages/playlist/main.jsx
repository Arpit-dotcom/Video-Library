import { Sidebar } from "components";
import { usePlaylist } from "contexts";
import "styles/header.css";

export const Main = () => {
  const { playlistState } = usePlaylist();

  return (
    <>
      <section className="playlistContainer">
        <Sidebar />

        <main className="main-content">
          <h1 className="heading">All Playlist</h1>
          <ul className="normal-list">
            {playlistState.playlists.map((playlist, index) => {
              return (
                <li className="normal-list-item" key={index}>
                  <div>
                    <strong>{playlist.title}</strong>.<span>0 videos</span>
                  </div>
                  <i className="fa fa-external-link"></i>
                </li>
              );
            })}
          </ul>
        </main>
      </section>
    </>
  );
};
