import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  let auth = localStorage.getItem("auth_token");
  return auth ? <Outlet /> : <Navigate to="/" />;
}
