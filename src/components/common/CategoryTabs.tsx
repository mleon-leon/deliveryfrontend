import { useNavigate, useParams } from "react-router-dom";

const categories = [
    { label: "Pasteles", value: "pasteles" },
    { label: "Cupcakes", value: "cupcakes" },
    { label: "Postres", value: "postres" },
    { label: "Especiales", value: "especiales" },
];

export default function CategoryTabs() {
    const navigate = useNavigate();
    const { category } = useParams<{ category: string }>();

    return (
        <div className="flex justify-center gap-4 mb-10">
            {categories.map((cat) => {
                const isActive = cat.value === category;

                return (
                    <button
                        key={cat.value}
                        onClick={() => navigate(`/products/${cat.value}`)}
                        className={`
                            px-5 py-2 rounded-full font-semibold transition
                            ${
                            isActive
                                ? "bg-pink-600 text-white shadow-md"
                                : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                        }
                        `}
                    >
                        {cat.label}
                    </button>
                );
            })}
        </div>
    );
}
