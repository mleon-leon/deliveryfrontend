import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getProducts} from "../../lib/api.ts";
import {ProductCard} from "../../components/common/ProductCard.tsx";
import CategoryTabs from "../../components/common/CategoryTabs.tsx";

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
};

const categoryMap: Record<string, number> = {
    pasteles: 1,
    cupcakes: 2,
    postres: 3,
    especiales: 4,
};

export default function Products() {
    const { category } = useParams<{ category?: string }>();

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const categoryId =
            category && categoryMap[category]
                ? categoryMap[category]
                : undefined;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);

        getProducts(categoryId)
            .then((data) => {
                console.log("PRODUCTOS FRONT:", data);
                setProducts(data);
            })
            .catch(() => setProducts([]))
            .finally(() => setLoading(false));
    }, [category]);

    if (loading) return <p>Cargando productos...</p>;

    if (products.length === 0)
        return <p>No hay productos para mostrar</p>;

    return (
        <div>

            <CategoryTabs />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                {products.map((p) => (
                    <ProductCard
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        price={p.price}
                        image={p.image}
                        description={p.description}
                    />
                ))}
            </div>

        </div>
    );


}
