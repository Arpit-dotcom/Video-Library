import "styles/auth/logout.css";
import { useEffect } from "react";
import { useLogout } from "utils";

export const Logout = () => {
  const {notLogOutHandler, logOutHandler} = useLogout();

  useEffect(() => {
    document.title = "Logout | Laugh Factory";
  }, []);

  return (
    <section className="logoutContainer">
      <div className="heading">
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
