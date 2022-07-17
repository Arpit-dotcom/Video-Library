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

  const submitHandler = async (event) => {
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

  const dummyHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: "arpitkumar@gmail.com",
        password: "arpit1234",
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

  return {
    submitHandler,
    dummyHandler,
    _email,
    _password,
    setEmail,
    setPassword,
  };
};
