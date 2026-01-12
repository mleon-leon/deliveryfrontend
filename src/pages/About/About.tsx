import { motion } from "framer-motion";
import aboutImage from '../../assets/about/abo.n.jpeg'

export default function About() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
            {/* TÍTULO */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-script text-pink-600 mb-6"
            >
                Sobre nosotros
            </motion.h1>

            {/* TEXTO */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-neutral-600 text-lg max-w-3xl mx-auto mb-12"
            >
                En Cake Factory nos dedicamos a crear postres artesanales
                que acompañen tus momentos más especiales. Cada receta
                está pensada con cuidado, creatividad y pasión por la
                pastelería, buscando siempre ofrecer una experiencia
                dulce y memorable.
            </motion.p>

            {/* IMAGEN */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full flex justify-center"
            >
                <img
                    src={aboutImage}
                    alt="Sobre Cake Factory"
                    className="
                        w-full
                        max-w-4xl
                        rounded-2xl
                        shadow-lg
                        object-cover
                    "
                />
            </motion.div>
        </div>
    );
}
