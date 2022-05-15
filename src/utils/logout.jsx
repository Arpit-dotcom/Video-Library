import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts";

export const useLogout = () => {
  const { setIsLoggedIn, setToken } = useAuth();
  const navigate = useNavigate();

  const notLogOutHandler = () => {
    navigate("/videoListing");
  };

  const logOutHandler = () => {
    setToken("");
    setIsLoggedIn(false);
    navigate("/videoListing");
  };
  return { notLogOutHandler, logOutHandler };
};
