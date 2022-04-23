import { videos } from "backend/db/videos";
import ReactPlayer from "react-player";
import { Sidebar } from "components";
import { useParams } from "react-router-dom";

export const Main = () => {
  const { videoId } = useParams();

  const getFilterVideo = (videoId, videos) => {
    return videos.find((video) => video.id === videoId);
  };

  const filterVideo = getFilterVideo(videoId, videos);
  return (
    <>
      <section className="videoPlayerContainer">
        <Sidebar />

        <main className="main-content">
          <div className="video">
            <ReactPlayer
              className="video-player"
              url={filterVideo.link}
              controls
            />
          </div>

          <h2 className="margin-top-1 title">{filterVideo.title}</h2>

          <div className="margin-top-2 footer">
            <span className="sub-container1">
              <img
                className="round sm"
                src={filterVideo.image}
                alt="video-avatar"
              />
              <span className="margin-top-0_5 left-sub-container">
                <p style={{ textAlign: "left" }}>{filterVideo.creator}</p>
                <div className="margin-top-0_5 left-mini-container">
                  <i className="margin-right-0_5 fas fa-eye"></i>
                  <span className="margin-right-2">{filterVideo.views}</span>
                  <i className="margin-right-0_5 far fa-dot-circle"></i>
                  <span>{filterVideo.days}</span>
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
            {filterVideo.description}
          </div>
        </main>
      </section>
    </>
  );
};
