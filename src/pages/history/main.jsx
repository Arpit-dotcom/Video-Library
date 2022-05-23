import axios from "axios";
import { VideoContainer, Sidebar } from "components";
import { useAuth, useHistory } from "contexts";

export const Main = () => {
  const { historyState, historyDispatch } = useHistory();
  const {token} =useAuth();

  const deleteAllHistory = async() => {
    try{
      const response = await axios.delete("/api/user/history/all", {
        headers: { authorization: token },
      });
      historyDispatch({ type: "DELETE_ALL_HISTORY", payload: response.data.history });
    }catch(e){
      console.log(e);
    }
  };

  return (
    <>
      <section className="main">
        <Sidebar />

        <main className="main-content">
          <div className="top-header">
            <span className="heading">
              <h1>History.</h1>
              <p>{historyState.history.length} videos</p>
            </span>
            <span>
              <i
                className="cursor-pointer fas fa-trash"
                onClick={() => deleteAllHistory()}
              ></i>
            </span>
          </div>

          {historyState.history.map((video, index) => {
            return <VideoContainer video={video} key={index} />;
          })}
        </main>
      </section>
    </>
  );
};
