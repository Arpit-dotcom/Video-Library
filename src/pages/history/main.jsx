import { VideoContainer, Sidebar } from "components";
import { useAuth } from "contexts";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from "slice/history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Main = () => {
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.history);
  const { token } = useAuth();

  const deleteAllHistory = async () => {
    dispatch(clearHistory(token));
    toast.error("Cleared all history");
  };

  return (
    <>
      <section className="main">
        <Sidebar />

        <main className="main-content">
          {history?.length ? (
            <div className="top-header">
              <span className="heading">
                <h1>History.</h1>
                <p>{history?.length} videos</p>
              </span>
              <span>
                <i
                  className="cursor-pointer fas fa-trash"
                  onClick={() => deleteAllHistory()}
                ></i>
              </span>
            </div>
          ) : (
            <span className="empty-container">
              <h2>History is empty !!!</h2>
              <p>
                There is no history yet, <Link to="/explore">explore more</Link>
              </p>
            </span>
          )}

          {history?.map((video, index) => {
            return <VideoContainer video={video} key={index} />;
          })}
        </main>
        <ToastContainer autoClose={2000} />
      </section>
    </>
  );
};
