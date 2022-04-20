// import { videos } from "backend/db/videos";
import { Sidebar } from "components";
import "styles/playlist.css"

export const Main = () => {
  return (
    <>
      <section className="playlistContainer">
        <Sidebar />

        <main className="main-content">
          <h1 className="heading">All Playlist</h1>
          <ul className="normal-list">
            <li className="normal-list-item">
              <div>
                <h3>Liked Videos.</h3>
                <span>0 videos</span>
              </div>
              <div>Icons</div>
            </li>
            <li className="normal-list-item">
              <div>
                <h3>Watch Later.</h3>
                <span> 0 videos</span>
              </div>
              <div>Icons</div>
            </li>
          </ul>
        </main>
      </section>
    </>
  );
};
