import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export function Header() {
    return (
        <header className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">

            <Link to="/" className="text-xl font-bold text-pink-600">
            </Link>


            <nav className="flex gap-6 text-sm font-medium text-neutral-700">
                <Link to="/" className="hover:text-pink-600">
                    Inicio
                </Link>
                <Link to="/about" className="hover:text-pink-600">
                    Sobre nosotros
                </Link>
                <Link to="/contact" className="hover:text-pink-600">
                    Contacto
                </Link>
            </nav>


            <div className="relative cursor-pointer">
                <ShoppingCart className="w-6 h-6 text-neutral-700" />
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
            </div>
        </header>
    );
}
