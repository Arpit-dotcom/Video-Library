import { Link } from "react-router-dom";
import "styles/auth/signup.css";
import { useEffect, useState } from "react";
import { useSignup } from "utils";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ToastContainer } from "react-toastify";

export const Signup = () => {
  const { submitHandler, signUpDispatch, signUpState } = useSignup();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

      <form action="login" onSubmit={(event) => submitHandler(event)}>
        <label htmlFor="FirstName">FirstName</label>
        <input
          className="inp"
          type="text"
          placeholder="FirstName"
          value={signUpState.firstName}
          onChange={(event) =>
            signUpDispatch({ type: "FIRSTNAME", payload: event })
          }
          required
        />

        <label htmlFor="LastName">LastName</label>
        <input
          className="inp"
          type="text"
          placeholder="LastName"
          value={signUpState.lastName}
          onChange={(event) =>
            signUpDispatch({ type: "LASTNAME", payload: event })
          }
          required
        />

        <label htmlFor="Email">Email</label>
        <input
          className="inp"
          type="email"
          placeholder="Email"
          value={signUpState.email}
          onChange={(event) =>
            signUpDispatch({ type: "EMAIL", payload: event })
          }
          required
        />

        <label htmlFor="Password">Password</label>
        <input
          className="inp"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={signUpState.password}
          onChange={(event) =>
            signUpDispatch({ type: "PASSWORD", payload: event })
          }
          required
        />
        <span
          className="password-icon"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>

        <label htmlFor="Confirm Password" className="confirm-password">
          Confirm Password
        </label>
        <input
          className="inp"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={signUpState.confirmPassword}
          onChange={(event) =>
            signUpDispatch({ type: "CONFIRM_PASSWORD", payload: event })
          }
          required
        />
        <span
          className="password-icon"
          onClick={() => setShowConfirmPassword((prev) => !prev)}
        >
          {showConfirmPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
        </span>
        <input className="submit" type="submit" value="Signup" />
      </form>

      <p>
        Already have an account?
        <Link className="signin-link" to="/login">
          Log In
        </Link>
      </p>
      <ToastContainer autoClose={2000} />
    </section>
  );
};
