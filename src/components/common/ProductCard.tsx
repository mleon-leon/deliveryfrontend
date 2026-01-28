import { PrimaryButton } from "./PrimaryButton";
import { useCart } from "../../context/CartContext";

type ProductCardProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    description?: string;
};

export function ProductCard({
                                id,
                                name,
                                price,
                                image,
                                description,
                            }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <img
                src={image}
                alt={name}
                className="h-48 w-full object-cover"
            />

            <div className="p-4 flex flex-col gap-2 text-left">
                <h3 className="font-semibold text-lg">{name}</h3>

                {description && (
                    <p className="text-sm text-gray-500 line-clamp-2">
                        {description}
                    </p>
                )}

                <p className="text-pink-600 font-bold">
                    ${price.toFixed(2)}
                </p>

                <PrimaryButton
                    onClick={() =>
                        addToCart({ id, name, price, image })
                    }
                >
                    Agregar al carrito
                </PrimaryButton>
            </div>
        </div>
    );
}
