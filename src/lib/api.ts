import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const setAuthToken = (token: string | null) => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
};

export const login = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    return res.data; // { access_token, user }
};

export const register = async (data: {
    name: string;
    email: string;
    password: string;
}) => {
    const res = await api.post("/auth/register", data);
    return res.data;
};


export const getProducts = async (categoryId?: number) => {
    const res = await api.get("/products", {
        params: categoryId ? { categoryId } : {},
    });
    return res.data;
};

export const createProduct = async (formData: FormData) => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        const error = await res.text();
        console.error("Backend error:", error);
        throw new Error("Error creando producto");
    }

    return res.json();
};


export const getProductById = async (id: number) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
};

export const getCart = async () => {
    const res = await api.get("/cart");
    return res.data;
};

export const addToCart = async (data: {
    productId: number;
    quantity: number;
}) => {
    const res = await api.post("/cart/add", data);
    return res.data;
};

export const updateCartItem = async (data: {
    productId: number;
    quantity: number;
}) => {
    const res = await api.patch("/cart/item", data);
    return res.data;
};

export const removeCartItem = async (productId: number) => {
    const res = await api.delete(`/cart/item/${productId}`);
    return res.data;
};

export const createOrder = async () => {
    const res = await api.post("/orders");
    return res.data;
};

export const getMyOrders = async () => {
    const res = await api.get("/orders");
    return res.data;
};

export const getUsers = async () => {
    const res = await api.get("/users");
    return res.data;
};

export const getAdminProducts = async () => {
    const res = await api.get("/products/admin");
    return res.data;
};

export const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cakefactory");

    const res = await fetch(
        "https://api.cloudinary.com/v1_1/dzdzhehubl/image/upload",
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await res.json();
    return data.secure_url;
};

export const deleteProduct = async (id: number) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) {
        throw new Error("Error al eliminar producto");
    }

    return res.json();
};


export const updateProduct = async (id: number, formData: FormData) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!res.ok) throw new Error("Error actualizando producto");
    return res.json();
};











