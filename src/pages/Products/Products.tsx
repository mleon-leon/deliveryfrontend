import {useNavigate, useParams} from "react-router-dom";
import {ProductCard} from "../../components/common/ProductCard.tsx";


const products = [
    {
        name: "Pastel de Chocolate",
        price: "$15.00",
        image:
            "https://images.unsplash.com/photo-1601979031925-424e53b6caaa",
        category: "pasteles",
    },
    {
        name: "Cupcakes de Vainilla",
        price: "$8.00",
        image:
            "https://images.unsplash.com/photo-1519869325930-281384150729",
        category: "cupcakes",
    },
    {
        name: "Cheesecake de Fresa",
        price: "$12.00",
        image:
            "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7",
        category: "postres",
    },
    {
        name: "Pastel Red Velvet",
        price: "$18.00",
        image:
            "https://images.unsplash.com/photo-1603079849109-9d3b0c41c6b3",
        category: "pasteles",
    },
];

export default function Products() {
    const { category } = useParams<{ category: string }>();
    const navigate = useNavigate();


    const filteredProducts = category
        ? products.filter((product) => product.category === category)
        : products;

    return (
        <div className="min-h-screen bg-neutral-100 px-6 py-10">
            <h1 className="text-3xl font-bold text-center mb-8 text-neutral-800 capitalize">
                {category ? category : "Nuestros productos"} 🍰
            </h1>

            {/* GRID DE PRODUCTOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}
