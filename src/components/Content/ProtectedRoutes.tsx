import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = (props:any) => {
 
  return props.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;