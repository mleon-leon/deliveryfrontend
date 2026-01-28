import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";

export default function AdminLayout() {
    return (
        <div className="flex min-h-screen bg-neutral-100">
            <AdminSidebar />
            <main className="flex-1 p-10">
                <Outlet />
            </main>
        </div>
    );
}
