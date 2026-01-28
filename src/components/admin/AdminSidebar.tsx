import { Link } from "react-router-dom";

export default function AdminSidebar() {
    return (
        <aside className="w-64 bg-white border-r p-6">
            <h2 className="text-xl font-bold text-pink-600 mb-6">
                Admin Panel
            </h2>

            <nav className="flex flex-col gap-4">
                <Link to="/admin" className="hover:text-pink-600">Dashboard</Link>
                <Link to="/admin/products" className="hover:text-pink-600">Productos</Link>
                <Link to="/admin/products/new" className="hover:text-pink-600">
                    Crear producto
                </Link>
                <Link to="/admin/users" className="hover:text-pink-600">
                    Usuarios
                </Link>

                <hr />

                <Link to="/" className="text-sm text-gray-500">
                    ← Volver a la tienda
                </Link>
            </nav>
        </aside>
    );
}
