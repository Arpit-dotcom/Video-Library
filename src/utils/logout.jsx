import { useNavigate } from "react-router-dom";
import { useAuth } from "contexts";

export const useLogout = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const notLogOutHandler = () => {
    navigate("/videoListing");
  };

  const logOutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/videoListing");
  };
  return { notLogOutHandler, logOutHandler };
};
