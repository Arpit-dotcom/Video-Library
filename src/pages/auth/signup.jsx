import { Link } from "react-router-dom";
import "styles/auth/signup.css";
import { useEffect } from "react";

const loginData = ["Firstname", "Lastname", "Email", "Password"];

export const Signup = () => {
  useEffect(() => {
    document.title = "Signup | Shopzila";
  }, []);
  return (
    <section className="signupContainer">
      <div className="heading">
        <h1>
          <strong>SIGN UP</strong>
        </h1>
      </div>

      <form action="login">
        {loginData.map((item) => (
          <>
            <label for={item}>
              {item}
              <input className="inp" type="text" placeholder={item} required />
            </label>
          </>
        ))}
        <input className="submit" type="submit" value="Signup" />
      </form>

      <p>
        Already have an account?
        <Link className="signin-link" to="/login">
          Log In
        </Link>
      </p>
    </section>
  );
};
