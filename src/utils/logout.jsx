import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts";

export const useLogout = () => {
  const { setIsLoggedIn, setToken } = useAuth();
  const navigate = useNavigate();

  const notLogOutHandler = () => {
    navigate("/explore");
  };

  const logOutHandler = () => {
    setToken("");
    setIsLoggedIn(false);
    navigate("/explore");
  };
  return { notLogOutHandler, logOutHandler };
};
