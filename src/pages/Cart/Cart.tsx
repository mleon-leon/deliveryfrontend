import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext.tsx";

export default function CartPage() {
    const {
        cart,
        increaseQty,
        decreaseQty,
        removeFromCart,
    } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-8">Tu carrito 🛒</h1>

            {cart.map(item => {
                const subtotal = item.price * item.quantity;

                return (
                    <motion.div
                        key={item.id}
                        layout
                        className="flex items-center justify-between bg-white rounded-xl shadow-sm p-4 mb-4"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded-lg"
                            />

                            <div>
                                <p className="font-semibold">{item.name}</p>

                                <p className="text-sm text-gray-500">
                                    ${item.price.toFixed(2)} x {item.quantity}
                                </p>

                                {/* 👇 SUBTOTAL POR PRODUCTO */}
                                <p className="text-pink-600 font-semibold">
                                    Subtotal: ${subtotal.toFixed(2)}
                                </p>
                            </div>
                        </div>

                        {/* CONTROLES */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => decreaseQty(item.id)}
                                className="p-1 rounded hover:bg-neutral-100"
                            >
                                <Minus size={16} />
                            </button>

                            <span className="font-semibold w-6 text-center">
                                {item.quantity}
                            </span>

                            <button
                                onClick={() => increaseQty(item.id)}
                                className="p-1 rounded hover:bg-neutral-100"
                            >
                                <Plus size={16} />
                            </button>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 rounded hover:bg-red-50 text-red-500"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </motion.div>
                );
            })}

            {/* TOTAL GENERAL */}
            <div className="flex justify-between items-center mt-10">
                <p className="text-xl font-semibold">Total:</p>
                <p className="text-xl font-bold text-pink-600">
                    ${total.toFixed(2)}
                </p>
            </div>

            <button className="mt-6 w-full bg-pink-600 hover:bg-pink-700 transition text-white py-4 rounded-xl font-semibold">
                Proceder al pago
            </button>
        </div>
    );
}
