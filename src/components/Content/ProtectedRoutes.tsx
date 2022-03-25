import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

let token:any


const ProtectedRoutes = (props:any) => {
 
  return token = localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;