import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "contexts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useLogin = () => {
  const [_email, setEmail] = useState("");
  const [_password, setPassword] = useState("");
  const { setIsLoggedIn, setToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: _email,
        password: _password,
      });
      toast.success("You are logged in");
      setToken(response.data.encodedToken);
      setIsLoggedIn(true);
      navigate(location.state?.from?.pathname || "/explore", {
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

  return {
    loginHandler,
    dummyHandler,
    _email,
    _password,
    setEmail,
    setPassword,
  };
};
