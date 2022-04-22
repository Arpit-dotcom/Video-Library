import "styles/auth/logout.css";
import { useEffect } from "react";

export const Logout = () => {
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
        <a className="primary" href="#">
          Just kidding
        </a>

        <a className="secondary" href="#">
          Log Me Out
        </a>
      </form>
    </section>
  );
};
