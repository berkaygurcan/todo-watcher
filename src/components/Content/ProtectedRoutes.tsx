import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import service from "../../services/odevserver/instance";
const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  if (token) {
    service.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
