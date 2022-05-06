import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "contexts";

export const useLogin = () => {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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
      setTimeout(() => {
        navigate(location.state?.from?.pathname || "/videoListing", {
          replace: true,
        });
      }, 5000);
    } catch (e) {
      console.log(e);
    }
  };

  const dummyHandler = (event) => {
    event.preventDefault();
    setEmail("arpitkumar@gmail.com");
    setPassword("arpit1234");
  };
  return {
    loginHandler,
    dummyHandler,
    _email,
    _password,
    setEmail,
    setPassword,
  };
};
