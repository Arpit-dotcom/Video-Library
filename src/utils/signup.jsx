import { useLocation, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import axios from "axios";
import { useAuth } from "contexts";
import { signUpReducer } from "reducer";

export const useSignup = () => {
  const { setIsLoggedIn, setToken } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

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
      console.log(response);
      setToken(response.data.encodedToken);
      setIsLoggedIn(true);
      navigate(location.state?.from?.pathname || "/explore", {
        replace: true,
      });
    } catch (e) {
      alert(e);
      alert("Enter correct details");
    }
  };
  return { submitHandler, signUpDispatch, signUpState };
};
