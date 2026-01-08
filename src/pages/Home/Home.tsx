import logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = ["pasteles", "cupcakes", "postres", "especiales"];

export default function Home() {
    const navigate = useNavigate(); // ✅ SIEMPRE dentro del componente

    return (
        <div className="px-6 py-12 flex flex-col items-center">
            <h1 className="text-4xl font-script text-pink-600 mb-10">
                Nuestros Productos
            </h1>

            {/* Categorías */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => navigate(`/products/${cat}`)}
                        className="bg-white rounded-2xl shadow-md
              hover:shadow-xl transition
              py-6 text-lg font-semibold text-pink-600
              hover:scale-105 duration-300 capitalize"
                    >
                        {cat}
                    </button>
                ))}
            </div>


            <div className="flex flex-col items-center gap-4 opacity-90">
                <motion.img
                    src={logo}
                    alt="Logo pastelería"
                    className="w-56 h-auto"
                    animate={{
                        y: [0, -6, 0],
                        rotate: [0, 1, -1, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

            </div>
        </div>
    );
}
