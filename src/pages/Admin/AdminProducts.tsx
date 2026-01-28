import { useEffect, useState } from "react";
import { getAdminProducts } from "../../lib/api";

type Product = {
    id: number;
    name: string;
    price: number;
};

export default function AdminProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAdminProducts().then(setProducts);
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Productos</h1>

            {products.length === 0 ? (
                <p>No hay productos</p>
            ) : (
                <ul className="space-y-3">
                    {products.map((product) => (
                        <li
                            key={product.id}
                            className="p-4 bg-white rounded shadow flex justify-between"
                        >
              <span className="font-medium">
                {product.name} – ${product.price}
              </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
