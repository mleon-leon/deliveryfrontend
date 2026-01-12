import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import homeBg from '../../assets/home/home-bg.jpeg'

const categories = [
    { id: "pasteles", label: "Pasteles" },
    { id: "cupcakes", label: "Cupcakes" },
    { id: "postres", label: "Postres" },
    { id: "especiales", label: "Especiales" },
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col items-center min-h-screen">

            {/* FONDO */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${homeBg})`,
                }}
            />

            <div className="absolute inset-0 bg-pink-50/70 backdrop-blur-sm" />

            <section className="
                relative z-10
                min-h-[60vh]
                flex flex-col
                items-center
                justify-center
                text-center
                px-6
            ">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-script text-pink-600 mb-8"
                >
                    Hechos con amor, horneados para ti
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => navigate(`/products/${cat.id}`)}
                            className="
                                px-8 py-4 rounded-2xl
                                border border-pink-600
                                text-pink-600 font-semibold text-lg
                                hover:bg-pink-600 hover:text-white
                                transition-all duration-300
                            "
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                <motion.img
                    src={logo}
                    alt="Cake Factory"
                    className="w-72 opacity-95"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </section>
        </div>
    );
}
