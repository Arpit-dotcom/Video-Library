import { videos } from "backend/db/videos";
import { Sidebar } from "components";
import "styles/watch-later.css";

export const Main = () => {
  return (
    <>
      <section className="watchLaterContainer">
        <Sidebar />

        <main className="main-content">
          <div className="heading">
            <h2>History.</h2>
            <p>{videos.length} videos</p>
          </div>

          {videos.map((video) => {
            return (
              <section className="card horizontal">
                <div className="container1">
                  <section className="header">
                    <p>{video.creator}</p>
                    <h2 className="margin-top-0_5">{video.title}</h2>
                    <small className="margin-top-0_5 description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Quis nesciunt, excepturi eius necessitatibus, omnis sint
                      autem perferendis maiores architecto minus, harum ipsa
                      rerum sit recusandae doloribus. Velit commodi voluptatem
                      minus.
                    </small>
                    <div className="margin-top-2 footer">
                      <span className="view">
                        <i className="fas fa-eye"></i>
                        <span>{video.views}</span>
                      </span>
                      <span className="time">
                        <i class="fas fa-clock"></i>
                        <span>{video.time}</span>
                      </span>
                    </div>
                  </section>

                  <i class="fas fa-times"></i>

                  <img class="img" src={video.image} alt="video" />
                </div>
              </section>
            );
          })}
        </main>
      </section>
    </>
  );
};
