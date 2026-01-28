import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {setAuthToken} from "./lib/api.ts";

const token = localStorage.getItem("token");
if (token) {
    setAuthToken(token);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>
);
