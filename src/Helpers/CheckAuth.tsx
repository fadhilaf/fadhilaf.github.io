import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const checkAuth = () => {
  const authCtx = useContext(AuthContext);
  const userData = authCtx?.userData;

  return userData && Object.keys(userData).length !== 0 ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  );
};
export default checkAuth;
