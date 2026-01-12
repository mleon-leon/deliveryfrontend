import { motion } from "framer-motion";
import { PrimaryButton } from "./PrimaryButton";
import { useCart } from "../../context/CartContext";

type ProductCardProps = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export function ProductCard({ id, name, price, image }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
            <div className="relative overflow-hidden">
                <motion.img
                    src={image}
                    alt={name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="h-48 w-full object-cover"
                />
            </div>

            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-neutral-800">
                    {name}
                </h3>

                <p className="text-pink-600 font-bold">
                    ${price.toFixed(2)}
                </p>

                <PrimaryButton
                    className="mt-2"
                    onClick={() =>
                        addToCart({
                            id,
                            name,
                            price,
                            image,
                        })
                    }
                >
                    Agregar al carrito
                </PrimaryButton>
            </div>
        </motion.div>
    );
}
