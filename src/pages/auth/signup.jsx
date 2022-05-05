import { Link } from "react-router-dom";
import "styles/auth/signup.css";
import { useEffect } from "react";
import { useSignup } from "utils";


export const Signup = () => {
  const { submitHandler, signUpDispatch, signUpState } = useSignup();

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
        <label htmlFor="FirstName">
          FirstName
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
        </label>
        <label htmlFor="LastName">
          LastName
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
        </label>
        <label htmlFor="Email">
          Email
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
        </label>
        <label htmlFor="Password">
          Password
          <input
            className="inp"
            type="password"
            placeholder="Password"
            value={signUpState.password}
            onChange={(event) =>
              signUpDispatch({ type: "PASSWORD", payload: event })
            }
            required
          />
        </label>
        <label htmlFor="Confirm Password">
          Confirm Password
          <input
            className="inp"
            type="password"
            placeholder="Confirm Password"
            value={signUpState.confirmPassword}
            onChange={(event) =>
              signUpDispatch({ type: "CONFIRM_PASSWORD", payload: event })
            }
            required
          />
        </label>
        <input
          className="submit"
          type="submit"
          onClick={(event) => submitHandler(event)}
          value="Signup"
        />
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
