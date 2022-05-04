import { Link, useNavigate, useLocation } from "react-router-dom";
import "styles/auth/login.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "contexts";

export const Login = () => {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = "Login | Laugh Factory";
  }, []);

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: _email,
        password: _password,
      });
      console.log(response);
      localStorage.setItem("token", response.data.encodedToken);
      setIsLoggedIn(true);
      navigate(location.state?.from?.pathname || "/videoListing", {
        replace: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const dummyHandler = (event) => {
    event.preventDefault();
    setEmail("arpitkumar@gmail.com");
    setPassword("arpit1234");
  };
  return (
    <section className="loginContainer">
      <div className="heading">
        <h1>
          <strong>LOGIN</strong>
        </h1>
        <small>See your growth and consulting support</small>
      </div>

      <form className="margin-2" action="login">
        <label htmlFor="Email">
          Email
          <input
            className="inp"
            type="email"
            placeholder="Email"
            value={_email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="Password">
          Password
          <input
            className="inp"
            type="password"
            placeholder="Password"
            value={_password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <input
          className="submit"
          type="submit"
          value="Login"
          onClick={(event) => loginHandler(event)}
        />
        <input
          className="submit"
          type="submit"
          onClick={(event) => dummyHandler(event)}
          value="Login as Test Credential"
        />
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
