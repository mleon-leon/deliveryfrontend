import { motion } from "framer-motion";
import { FormInput } from "../../components/common/FormInput";
import { PrimaryButton } from "../../components/common/PrimaryButton";

export default function Contact() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-script text-pink-600 text-center mb-6"
            >
                Contáctanos
            </motion.h1>

            {/* TEXTO */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center text-neutral-600 max-w-2xl mx-auto mb-12"
            >
                ¿Tienes alguna pregunta, pedido especial o quieres más
                información? Escríbenos y estaremos encantados de ayudarte.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.form
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                        bg-white
                        rounded-2xl
                        shadow-lg
                        p-6
                        max-w-md
                        w-full
                        mx-auto
                        flex flex-col gap-4
                    "
                >
                    <FormInput
                        label="Nombre"
                        placeholder="Tu nombre"
                    />

                    <FormInput
                        label="Correo electrónico"
                        type="email"
                        placeholder="correo@ejemplo.com"
                    />

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-neutral-700">
                            Mensaje
                        </label>
                        <textarea
                            rows={4}
                            className="
                                border
                                rounded-lg
                                p-3
                                resize-none
                                focus:outline-none
                                focus:ring-2
                                focus:ring-pink-500
                                transition
                            "
                            placeholder="Escribe tu mensaje aquí..."
                        />
                    </div>

                    <PrimaryButton type="submit">
                        Enviar mensaje
                    </PrimaryButton>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                        flex flex-col
                        justify-center
                        gap-6
                        text-neutral-700
                        max-w-md
                        mx-auto
                    "
                >
                    <div>
                        <p className="font-semibold text-lg">
                            📞 Teléfono
                        </p>
                        <p className="text-neutral-600">
                            +593 98 335 5073
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold text-lg">
                            📍 Dirección
                        </p>
                        <p className="text-neutral-600">
                            Av. Pastelito y Calle Dulce, Ecuador
                        </p>
                    </div>

                    <a
                        href="https://wa.link/23ayx8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            bg-green-500
                            hover:bg-green-600
                            text-white
                            font-semibold
                            py-3
                            rounded-xl
                            transition
                        "
                    >
                        💬 Escríbenos por WhatsApp
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
