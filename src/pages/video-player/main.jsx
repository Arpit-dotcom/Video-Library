// import { videos } from "backend/db/videos";
import ReactPlayer from "react-player";
import { Sidebar } from "components";

export const Main = () => {
  return (
    <>
      <section className="videoPlayerContainer">
        <Sidebar />

        <main className="main-content">
          <div className="video">
            <ReactPlayer
              className="video-player"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              controls
            />
          </div>

          <h2 className="margin-top-1 title">title</h2>

          <div className="margin-top-2 footer">
            <span className="sub-container1">
              <img
                className="round sm"
                src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
                alt="avatar-image"
              />
              <span className="margin-top-0_5 left-sub-container">
                <p style={{ textAlign: "left" }}>creator</p>
                <div className="margin-top-0_5 left-mini-container">
                  <i className="margin-right-0_5 fas fa-eye"></i>
                  <span className="margin-right-2">views</span>
                  <i className="margin-right-0_5 far fa-dot-circle"></i>
                  <span>days</span>
                </div>
              </span>
            </span>
            <span className="margin-top-0_5 sub-container2">
              <i className="margin-right-0_5 margin-top-0_2 fas fa-thumbs-up"></i>
              <span className="margin-right-2">Like</span>
              <i className="margin-right-0_5 margin-top-0_2 fas fa-list"></i>
              <span className="margin-right-2">Save to playlist</span>
              <i className="margin-right-0_5 margin-top-0_2 far fa-clock"></i>
              <span>Watch later</span>
            </span>
          </div>

          <div className="margin-top-2 description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            reprehenderit distinctio voluptatibus quas dolores ipsa, earum ex
            molestiae sint eligendi, pariatur quibusdam? Commodi quidem dolorem
            eveniet ratione nesciunt corrupti tempora?
          </div>
        </main>
      </section>
    </>
  );
};
