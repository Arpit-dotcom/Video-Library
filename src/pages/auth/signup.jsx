import { Link, useLocation, useNavigate } from "react-router-dom";
import "styles/auth/signup.css";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { useAuth } from "contexts";

export const Signup = () => {
  const { setIsLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Signup | Shopzila";
  }, []);

  const signUpReducer = (signUpState, signUpAction) => {
    switch (signUpAction.type) {
      case "FIRSTNAME":
        return { ...signUpState, firstName: signUpAction.payload.target.value };
      case "LASTNAME":
        return { ...signUpState, lastName: signUpAction.payload.target.value };
      case "EMAIL":
        return { ...signUpState, email: signUpAction.payload.target.value };
      case "PASSWORD":
        return { ...signUpState, password: signUpAction.payload.target.value };
      case "CONFIRM_PASSWORD":
        return {
          ...signUpState,
          confirmPassword: signUpAction.payload.target.value,
        };
      default:
        return signUpState;
    }
  };

  const [signUpState, signUpDispatch] = useReducer(signUpReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: signUpState.firstName,
        lastName: signUpState.lastName,
        email: signUpState.email,
        password: signUpState.password,
        confirmPassword: signUpState.confirmPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setIsLoggedIn(true);
      navigate(location.state?.from?.pathname || "/videoListing", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

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
