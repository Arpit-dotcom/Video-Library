import { Link } from "react-router-dom";
import "styles/auth/login.css";
import { useEffect, useState } from "react";
import { useLogin } from "utils";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ToastContainer } from "react-toastify";

export const Login = () => {
  const {
    submitHandler,
    dummyHandler,
    _email,
    _password,
    setEmail,
    setPassword,
  } = useLogin();

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "Login | Laugh Factory";
  }, []);

  return (
    <section className="loginContainer">
      <div className="heading">
        <h1>
          <strong>LOGIN</strong>
        </h1>
      </div>

      <form
        className="margin-2"
        action="login"
        onSubmit={(event) => submitHandler(event)}
      >
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
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={_password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="password-icon"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </label>
        <input className="submit" type="submit" value="Login" />
        <input
          className="submit"
          type="submit"
          onClick={(event) => dummyHandler(event)}
          value="Login as a Guest"
        />
      </form>
      <p>
        Don't have an account?
        <Link className="signup-link" to="/signup">
          Sign Up
        </Link>
      </p>
      <ToastContainer autoClose={2000} />
    </section>
  );
};
