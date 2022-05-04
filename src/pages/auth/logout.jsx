import "styles/auth/logout.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts";

export const Logout = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Logout | Laugh Factory";
  }, []);

  const notLogOutHandler = () => {
    navigate("/videoListing");
  };

  const logOutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/videoListing");
  };

  return (
    <section className="logoutContainer">
      <div className="heading">
        {/* <span className="material-icons-outlined"> logout </span> */}
        <h1>
          <strong>LOG OUT</strong>
        </h1>
        <small>Oh no! You're leaving...</small>
      </div>

      <form className="logout" action="logout">
        <button
          className="cursor-pointer primary"
          onClick={() => notLogOutHandler()}
        >
          Just kidding
        </button>

        <button
          className="cursor-pointer secondary"
          onClick={() => logOutHandler()}
        >
          Log Me Out
        </button>
      </form>
    </section>
  );
};