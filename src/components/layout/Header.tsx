import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

export default function Header() {
    const { cartCount, bump } = useCart();

    return (
        <motion.header
            className="
        sticky top-0 z-50
        bg-pink-50/80
        backdrop-blur-md
        border-b border-pink-200
      "
            initial={{ height: 72 }}
            animate={{ height: bump ? 64 : 72 }}
            transition={{ duration: 0.25 }}
        >
            <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

                <NavLink
                    to="/"
                    className="font-script text-2xl text-pink-600 hover:opacity-80 transition"
                >
                </NavLink>

                <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-700">
                    <NavLink to="/" className="hover:text-pink-600 transition">
                        Inicio
                    </NavLink>
                    <NavLink to="/about" className="hover:text-pink-600 transition">
                        Sobre nosotros
                    </NavLink>
                    <NavLink to="contact" className="hover:text-pink-600 transition">
                        Contacto
                    </NavLink>
                </nav>


                <NavLink to="/cart" className="relative cursor-pointer">
                    <motion.div
                        animate={bump ? { scale: [1, 1.25, 1] } : { scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <ShoppingCart className="w-7 h-7 text-neutral-700" />
                    </motion.div>

                    {cartCount > 0 && (
                        <motion.span
                            key={cartCount}
                            initial={{ scale: 0.6 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            className="
        absolute -top-2 -right-2
        bg-pink-600 text-white
        text-xs font-semibold
        w-5 h-5 rounded-full
        flex items-center justify-center
      "
                        >
                            {cartCount}
                        </motion.span>
                    )}
                </NavLink>





            </div>
        </motion.header>
    );
}
