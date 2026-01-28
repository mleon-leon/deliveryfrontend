import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import AdminProducts from "../pages/Admin/AdminProducts.tsx";
import AdminCreateProduct from "../pages/Admin/AdminCreateProduct.tsx";
import AdminUsers from "../pages/Admin/AdminUsers.tsx";
import AdminRoute from "./AdminRoute.tsx";
import AdminDashboard from "../pages/Admin/AdminDashboard.tsx";



export default function AppRouter() {
    return (
        <Routes>
            {/* TIENDA */}
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:category" element={<Products />} />
                <Route path="cart" element={<Cart />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>

            {/* AUTH */}
            <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            {/* ADMIN */}
            <Route element={<AdminRoute />}>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<AdminDashboard />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="products/new" element={<AdminCreateProduct />} />
                    <Route path="users" element={<AdminUsers />} />
                </Route>
            </Route>

        </Routes>
    );
}
