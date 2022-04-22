import { videos } from "backend/db/videos";
import { Sidebar } from "components";
import "styles/playlist.css";

const playlists = [{ name: "Liked Videos" }, { name: "Watch Later" }];
export const Main = () => {
  return (
    <>
      <section className="playlistContainer">
        <Sidebar />

        <main className="main-content">
          <h1 className="heading">All Playlist</h1>
          <ul className="normal-list">
            {playlists.map((playlist) => (
              <li className="normal-list-item">
                <div>
                  <h3>{playlist.name}.</h3>
                  <span>{videos.length} videos</span>
                </div>
                <div>Icons</div>
              </li>
            ))}
          </ul>
        </main>
      </section>
    </>
  );
};
