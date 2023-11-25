import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from "./context/AdminContext"

export default function ProtectedRoute() {
  const {isAuthenticated, loading}  = useAdmin()

  if(loading) return <h1>Loading...</h1>;
  if(!loading && !isAuthenticated) return <Navigate  to="/login" replace />
  return <Outlet /> 
}