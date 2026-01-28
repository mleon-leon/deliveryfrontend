import { useNavigate, useParams } from "react-router-dom";

const categories = [
    { id: 1, label: "Pasteles", slug: "pasteles" },
    { id: 2, label: "Cupcakes", slug: "cupcakes" },
    { id: 3, label: "Postres", slug: "postres" },
    { id: 4, label: "Especiales", slug: "especiales" },
];

export default function CategoryTabs() {
    const navigate = useNavigate();
    const { category } = useParams();

    return (
        <div className="sticky top-16 z-40 bg-white-50 py-4 mb-8">
            <div className="flex justify-center gap-3 flex-wrap">
                {categories.map((cat) => {
                    const isActive = cat.slug === category;

                    return (
                        <button
                            key={cat.id}
                            onClick={() => navigate(`/products/${cat.slug}`)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                                ${
                                isActive
                                    ? "bg-pink-600 text-white scale-105 shadow"
                                    : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                            }
                            `}
                        >
                            {cat.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
