import { Navigate, Outlet } from "react-router-dom";
import { isAdmin } from "../lib/auth";

export default function AdminRoute() {
    return isAdmin() ? <Outlet /> : <Navigate to="/" replace />;
}
