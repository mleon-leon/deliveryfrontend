import { useState } from "react";
import { createProduct } from "../../lib/api";

type CreateProductForm = {
    name: string;
    price: string;
    description: string;
    categoryId: string;
};

export default function AdminCreateProduct() {
    const [form, setForm] = useState<CreateProductForm>({
        name: "",
        price: "",
        description: "",
        categoryId: "",
    });

    const [imageFile, setImageFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (!imageFile) {
                setError("Debes seleccionar una imagen");
                return;
            }

            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("price", form.price);
            formData.append("description", form.description);
            formData.append("categoryId", form.categoryId);
            formData.append("image", imageFile);

            await createProduct(formData);

            alert("Producto creado correctamente");

            setForm({
                name: "",
                price: "",
                description: "",
                categoryId: "",
            });
            setImageFile(null);
            setPreview(null);
        } catch (err) {
            console.error(err);
            setError("Error al crear el producto");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl bg-white p-6 rounded-lg shadow space-y-4"
        >
            <h2 className="text-2xl font-bold">Crear producto</h2>

            <input
                className="w-full border rounded px-3 py-2"
                placeholder="Nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
            />

            <input
                className="w-full border rounded px-3 py-2"
                type="number"
                placeholder="Precio"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                required
            />

            <textarea
                className="w-full border rounded px-3 py-2"
                placeholder="Descripción"
                value={form.description}
                onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                }
                required
            />

            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setImageFile(file);
                    setPreview(URL.createObjectURL(file));
                }}
                required
            />

            {preview && (
                <img
                    src={preview}
                    className="h-40 w-full object-cover rounded"
                    alt="preview"
                />
            )}

            <select
                className="w-full border rounded px-3 py-2"
                value={form.categoryId}
                onChange={(e) =>
                    setForm({ ...form, categoryId: e.target.value })
                }
                required
            >
                <option value="">Selecciona categoría</option>
                <option value="1">Pasteles</option>
                <option value="2">Cupcakes</option>
                <option value="3">Postres</option>
                <option value="4">Especiales</option>
            </select>

            {error && <p className="text-red-600">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className="bg-pink-600 text-white px-4 py-2 rounded w-full"
            >
                {loading ? "Guardando..." : "Guardar producto"}
            </button>
        </form>
    );
}
