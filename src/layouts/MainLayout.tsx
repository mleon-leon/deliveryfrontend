import { Outlet } from "react-router-dom";
import {Header} from "../components/layout/Header";

export function MainLayout() {
    return (
        <div className="min-h-screen bg-neutral-100">
            <Header />
            <main className="pt-4">
                <Outlet />
            </main>
        </div>
    );
}
