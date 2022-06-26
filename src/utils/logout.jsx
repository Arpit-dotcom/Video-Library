import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useLogout = () => {
  const { setIsLoggedIn, setToken } = useAuth();
  const navigate = useNavigate();

  const notLogOutHandler = () => {
    navigate("/explore");
  };

  const logOutHandler = () => {
    toast.error("You are logged out");
    setToken("");
    setIsLoggedIn(false);
    navigate("/explore");
  };
  return { notLogOutHandler, logOutHandler };
};
