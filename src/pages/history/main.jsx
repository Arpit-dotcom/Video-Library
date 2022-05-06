import { PlaylistContainer, Sidebar } from "components";
import { useHistory } from "contexts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Main = () => {
  const { historyState, historyDispatch } = useHistory();

  const deleteAllHistory = () => {
    historyDispatch({ type: "DELETE_ALL__HISTORY" });
    toast.error("All videos deleted from history!");
  };

  return (
    <>
      <section className="watchLaterContainer">
        <Sidebar />

        <main className="main-content">
          <div className="top-header">
            <span className="heading">
              <h2>History.</h2>
              <p>{historyState.history.length} videos</p>
            </span>
            <span>
              <i
                className="cursor-pointer fas fa-trash"
                onClick={() => deleteAllHistory()}
              ></i>
            </span>
          </div>

          {historyState.history.map((video) => {
            return <PlaylistContainer video={video} />;
          })}
        </main>
      </section>
      <ToastContainer />
    </>
  );
};
