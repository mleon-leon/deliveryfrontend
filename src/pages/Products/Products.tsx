import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/common/ProductCard";
import CategoryTabs from "../../components/common/CategoryTabs";


import pastelChoco from "@/assets/products/pasteles/p.choco.jpg";
import pastelNaranja from "@/assets/products/pasteles/p.nara.jpg";
import pastelRed from "@/assets/products/pasteles/p.red.jpg";
import pastelZanahoria from "@/assets/products/pasteles/p.zanahoria.jpg";


import cupcakeManzana from "@/assets/products/cupcakes/c.manz.jpg";
import cupcakeMojito from "@/assets/products/cupcakes/c.mojito.jpg";
import cupcakeRed from "@/assets/products/cupcakes/c.red.jpg";
import cupcakeZanahoria from "@/assets/products/cupcakes/c.zanahoria.jpg";


import postreCheese from "@/assets/products/postres/p.cheese.jpg";
import postreCheesem from "@/assets/products/postres/p.cheesem.jpg";
import postrePie from "@/assets/products/postres/p.pie.jpg";
import postreTres from "@/assets/products/postres/p.tres.jpg";


import especialCroa from "@/assets/products/especiales/e.croa.jpg";
import especialFlan from "@/assets/products/especiales/e.flan.jpg";
import especialOreo from "@/assets/products/especiales/e.oreo.jpg";
import especialTir from "@/assets/products/especiales/e.tir.jpg";

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

const productsByCategory: Record<string, Product[]> = {
    pasteles: [
        { id: 1, name: "Pastel de Chocolate", price: 15, image: pastelChoco },
        { id: 2, name: "Pastel de Naranja", price: 14, image: pastelNaranja },
        { id: 3, name: "Red Velvet", price: 18, image: pastelRed },
        { id: 4, name: "Pastel de Zanahoria", price: 16, image: pastelZanahoria },
    ],
    cupcakes: [
        { id: 5, name: "Cupcake de Manzana", price: 6, image: cupcakeManzana },
        { id: 6, name: "Cupcake Mojito", price: 6, image: cupcakeMojito },
        { id: 7, name: "Cupcake Red Velvet", price: 7, image: cupcakeRed },
        { id: 8, name: "Cupcake Zanahoria", price: 6, image: cupcakeZanahoria },
    ],
    postres: [
        { id: 9, name: "Cheesecake Frutos Rojos", price: 12, image: postreCheese },
        { id: 10, name: "Cheesecake Maracuyá", price: 13, image: postreCheesem },
        { id: 11, name: "Pie de Limón", price: 10, image: postrePie },
        { id: 12, name: "Tres Leches", price: 11, image: postreTres },
    ],
    especiales: [
        { id: 13, name: "Croissant Especial", price: 8, image: especialCroa },
        { id: 14, name: "Flan Gourmet", price: 9, image: especialFlan },
        { id: 15, name: "Oreo Deluxe", price: 10, image: especialOreo },
        { id: 16, name: "Tiramisú", price: 12, image: especialTir },
    ],
};

export default function Products() {
    const { category } = useParams<{ category: string }>();

    const products = category
        ? productsByCategory[category] ?? []
        : [];

    return (
        <div className="min-h-screen bg-neutral-100 px-6 py-10">

            <CategoryTabs />


            <h1 className="text-3xl font-bold text-center mb-10 text-neutral-800 capitalize">
                {category}
            </h1>


            {products.length === 0 ? (
                <p className="text-center text-neutral-500">
                    No hay productos disponibles en esta categoría.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
