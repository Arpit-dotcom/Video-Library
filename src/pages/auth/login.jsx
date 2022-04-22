import { Link } from "react-router-dom";
import "styles/auth/login.css";
import { useEffect } from "react";

const loginData = ["Email", "Password"];

export const Login = () => {
  useEffect(() => {
    document.title = "Login | Laugh Factory";
  }, []);
  return (
    <section className="loginContainer">
      <div className="heading">
        <h1>
          <strong>LOGIN</strong>
        </h1>
        <small>See your growth and consulting support</small>
      </div>

      <form className="margin-2" action="login">
        {loginData.map((item) => (
          <>
            <label for="Email">
              {item}
              <input className="inp" type="text" placeholder={item} required />
            </label>
          </>
        ))}
        <input className="submit" type="submit" value="Login" />
      </form>
      <p>
        Don't have an account?
        <Link className="signup-link" to="/signup">
          Sign Up
        </Link>
      </p>
    </section>
  );
};
