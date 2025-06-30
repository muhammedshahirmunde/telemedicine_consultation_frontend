import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./Header";

const ProtectedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  // const user = JSON.parse(localStorage.getItem("user") || "null");
  const user = { id: 1, role: "patient", token: "12g2g" };

  if (!user || !user.token) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <Header>
      <Outlet />
    </Header>
  );
};

export default ProtectedRoute;
