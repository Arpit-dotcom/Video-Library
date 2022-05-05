import { useAuth } from "contexts";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({children}) =>{
    const {isLoggedIn} = useAuth();
    const location = useLocation();
    return isLoggedIn ? children : <Navigate to="/login" state={{from: location}} replace/>
}